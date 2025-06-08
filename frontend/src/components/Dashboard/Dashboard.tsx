import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './dashboard.css';
import { AuthContext } from '../../context/AuthContext';
import { URL } from '../../constants/GlobalConstants';
import { Bag } from '../../types/types';
import { AccountInfo } from './components/AccountInfo';
import { BagList } from './components/BagList';
import { AdminGiftsTab } from './components/AdminGiftsTab';
import { AdminBagTab } from './components/AdminBagTab';
import { AdminUsers } from './components/AdminUsers';

type Tab = 'user' | 'admin-gifts' | 'admin-bag' | 'admin-users';

export const Dashboard = () => {
  const { user, access_token } = useContext(AuthContext);
  const [bags, setBags] = useState<Bag[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>('user');
  const isAdmin = user?.role === 'admin';

  const fetchBags = async () => {
    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      };

      const response = await axios.get<Bag[]>(`${URL}/bags`, config);
      setBags(response.data);
    } catch (error) {
      console.error('Error fetching bags:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (access_token) {
      fetchBags();
    }
  }, [access_token]);

  // delete bag
  const handleDelete = async (bagId: string) => {
    if (!confirm('Do you want to delete your bag?')) return;

    try {
      setDeleteLoading(bagId);
      const config = {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      };

      await axios.delete(`${URL}/bags/${bagId}`, config);
      setBags((prev) => prev.filter((bag) => bag._id !== bagId));
    } catch (error) {
      console.error('Error deleting bag:', error);
      alert('Error while deleting your bag. Please try again later');
    } finally {
      setDeleteLoading(null);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p className="text-welcome">Welcome, {user?.name}</p>
      </div>

      {isAdmin && (
        <div className="tabs">
          <button
            className={`tab-button ${activeTab === 'user' ? 'active' : ''}`}
            onClick={() => setActiveTab('user')}
          >
            Bags
          </button>
          <button
            className={`tab-button ${
              activeTab === 'admin-gifts' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('admin-gifts')}
          >
            Manage Gifts
          </button>
          <button
            className={`tab-button ${
              activeTab === 'admin-bag' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('admin-bag')}
          >
            All Bags
          </button>
          <button
            className={`tab-button ${
              activeTab === 'admin-users' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('admin-users')}
          >
            All Users
          </button>
        </div>
      )}

      <div className="dashboard-content">
        {activeTab === 'user' && (
          <>
            <AccountInfo user={user} />
            <BagList
              bags={bags}
              loading={loading}
              deleteLoading={deleteLoading}
              onDelete={handleDelete}
            />
          </>
        )}

        {activeTab === 'admin-gifts' && <AdminGiftsTab />}
        {activeTab === 'admin-bag' && <AdminBagTab />}
        {activeTab === 'admin-users' && <AdminUsers />}
      </div>
    </div>
  );
};
