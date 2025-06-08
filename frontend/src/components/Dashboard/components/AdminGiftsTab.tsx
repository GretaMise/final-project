import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { URL } from '../../../constants/GlobalConstants';
import { Gift } from '../../../types/types';
import { AuthContext } from '../../../context/AuthContext';
import { GiftFormModal } from './GiftFormModal';

export const AdminGiftsTab = () => {
  const { access_token } = useContext(AuthContext);
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editGift, setEditGift] = useState<Gift | null>(null);

  useEffect(() => {
    const fetchGifts = async () => {
      try {
        if (!access_token) {
          console.error('Access token is missing');
          setIsLoading(false);
          return;
        }
        const response = await axios.get<Gift[]>(`${URL}/gifts`);
        setGifts(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching gifts:', error);
        setIsLoading(false);
      }
    };

    fetchGifts();
  }, [access_token]);

  const handleSubmit = async (formData: Omit<Gift, '_id'>) => {
    const config = {
      headers: { Authorization: `Bearer ${access_token}` },
    };

    try {
      if (editGift) {
        await axios.patch(`${URL}/gifts/${editGift._id}`, formData, config);
        alert('Gift updated successfully');
      } else {
        await axios.post(`${URL}/gifts`, formData, config);
        alert('Gift created successfully');
      }

      // refresh the gift list
      const response = await axios.get<Gift[]>(`${URL}/gifts`);
      setGifts(response.data);

      // reset gift form
      setShowForm(false);
      setEditGift(null);
    } catch (error) {
      console.error('Error:', error);
      alert('Please try again. Error.');
    }
  };

  const handleEdit = (gift: Gift) => {
    setEditGift(gift);
    setShowForm(true);
  };

  return (
    <div className="admin-tab">
      <div className="admin-header">
        <h2>Manage Gifts</h2>
        <button className="btn" onClick={() => setShowForm(true)}>
          Add new gift
        </button>
      </div>

      {isLoading ? (
        <p>Loading gifts..</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Theme</th>
            </tr>
          </thead>
          <tbody>
            {gifts.map((gift) => (
              <tr key={gift._id}>
                <td>{gift.name}</td>
                <td>{gift.price}</td>
                <td>{gift.theme}</td>
                <td>
                  <button className="btn-edit" onClick={() => handleEdit(gift)}>
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {showForm && (
        <GiftFormModal
          onModalClose={() => {
            setShowForm(false);
            setEditGift(null);
          }}
          onSubmit={handleSubmit}
          editGift={editGift}
        />
      )}
    </div>
  );
};
