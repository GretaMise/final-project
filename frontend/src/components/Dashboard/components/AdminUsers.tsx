import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { URL } from '../../../constants/GlobalConstants';
import { AuthContext } from '../../../context/AuthContext';
import { User } from '../../../types/types';
import { UserUpdateModal } from './UserUpdateModal';
import '../dashboard.css';

export const AdminUsers = () => {
  const { access_token, user } = useContext(AuthContext);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const fetchAllUsers = async () => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${access_token}` },
      };

      const response = await axios.get<User[]>(`${URL}/auth/users`, config);
      setAllUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching all users:', error);
      setLoading(false);
    }
  };

  const updateUserRole = async (newRole: string) => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${access_token}` },
      };

      await axios.put(
        `${URL}/auth/update-role/${selectedUser?._id}`,
        { role: newRole },
        config
      );
      setIsModalOpen(false);
      setSelectedUser(null);
      fetchAllUsers();
    } catch (error) {
      console.error('Error updating user role:', error);
    }
  };

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleDelete = async (userId: string) => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${access_token}` },
      };

      await axios.delete(`${URL}/auth/delete-user/${userId}`, config);
      setDeleteConfirm(null);
      fetchAllUsers();
    } catch (error: any) {
      console.error('Error deleting user:', error);
      alert(error.response?.data?.error || 'Error deleting user');
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, [access_token]);

  return (
    <div className="admin-tab">
      <h2>All Users</h2>

      {loading ? (
        <p>Loading all users...</p>
      ) : allUsers.length === 0 ? (
        <p>No users found</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((listUser) => (
              <tr key={listUser._id}>
                <td>{listUser.name}</td>
                <td>{listUser.email}</td>
                <td>{listUser.role}</td>
                <td className="action-buttons">
                  <button className="btn-edit" onClick={() => handleEdit(listUser)}>
                    Edit
                  </button>
                  {user?._id !== listUser._id && (
                    <>
                      {deleteConfirm === listUser._id ? (
                        <>
                          <button 
                            className="btn-edit"
                            onClick={() => handleDelete(listUser._id)}
                            style={{ backgroundColor: '#dc3545', marginLeft: '8px' }}
                          >
                            Confirm
                          </button>
                          <button 
                            className="btn-edit"
                            onClick={() => setDeleteConfirm(null)}
                            style={{ marginLeft: '8px' }}
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <button 
                          className="btn-edit"
                          onClick={() => setDeleteConfirm(listUser._id)}
                          style={{ backgroundColor: '#dc3545', marginLeft: '8px' }}
                        >
                          Delete
                        </button>
                      )}
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {isModalOpen && (
        <UserUpdateModal
          onModalClose={() => setIsModalOpen(false)}
          onSubmit={(formData) => updateUserRole(formData.role)}
          editUser={selectedUser}
        />
      )}
    </div>
  );
};
