import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { URL } from '../../../constants/GlobalConstants';
import { AuthContext } from '../../../context/AuthContext';
import { AdminBag } from '../../../types/types';

export const AdminBagTab = () => {
  const { access_token } = useContext(AuthContext);
  const [allBags, setAllBags] = useState<AdminBag[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllBags = async () => {
      try {
        const config = {
          headers: { Authorization: `Bearer ${access_token}` },
        };

        const response = await axios.get<AdminBag[]>(`${URL}/bags/all`, config);
        setAllBags(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching all bags for admin:', error);
        setLoading(false);
      }
    };

    fetchAllBags();
  }, [access_token]);

  const formattedDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  const handleDelete = async (bagId: string) => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${access_token}` },
      };
      await axios.delete(`${URL}/bags/${bagId}`, config);
      // Remove the deleted bag from state
      setAllBags(allBags.filter(bag => bag._id !== bagId));
    } catch (error) {
      console.error('Error deleting bag:', error);
      alert('Failed to delete bag. Please try again.');
    }
  };

  return (
    <div className="admin-tab">
      <h2>All Bags</h2>

      {loading ? (
        <p>Loading all bags..</p>
      ) : allBags.length === 0 ? (
        <p>No bags found</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Gift</th>
              <th>Total Price</th>
              <th>Booking Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allBags.map((bag) => (
              <tr key={bag._id}>
                <td>
                  {bag.user.name}
                  <div className="email">{bag.user.email}</div>
                </td>
                <td>
                  <div className="gift-details">
                    <img
                      src={bag.gift.image}
                      alt={bag.gift.name}
                      className="gift-image"
                    />
                    <div>{bag.gift.name}</div>
                  </div>
                </td>
                <td>{bag.totalPrice.toFixed(2)}</td>
                <td>{formattedDate(bag.createdAt)}</td>
                <td>
                  <button 
                    className="btn-delete"
                    onClick={() => {
                      if (window.confirm('Are you sure you want to delete this bag?')) {
                        handleDelete(bag._id);
                      }
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
