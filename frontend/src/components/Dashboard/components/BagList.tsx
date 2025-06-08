import {  Bag } from '../../../types/types';
import { BagItem } from './BagItem';

interface BagListProps {
  bags: Bag[];
  loading: boolean;
  deleteLoading: string | null;
  onDelete: (id: string) => void;
}

export const BagList = ({
  bags,
  loading,
  deleteLoading,
  onDelete,
}: BagListProps) => {
  return (
    <div className="dashboard-card bag-card">
      <h3>Your Bag</h3>
      {loading ? (
        <p>Wait, your bag is loading..</p>
      ) : bags.length === 0 ? (
        <p>Your bag is empty. Choose the gift and add it to your bag</p>
      ) : (
        <div className="bag-list">
          {bags.map((bag) => (
            <BagItem
              key={bag._id}
              bag={bag}
              onDelete={onDelete}
              isDeleting={deleteLoading === bag._id}
            />
          ))}
        </div>
      )}
    </div>
  );
};
