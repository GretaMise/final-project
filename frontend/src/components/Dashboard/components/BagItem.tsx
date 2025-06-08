import { Bag } from '../../../types/types';

interface BagItemProps {
  bag: Bag;
  onDelete: (id: string) => void;
  isDeleting: boolean;
}

export const BagItem = ({ bag, onDelete, isDeleting }: BagItemProps) => {
  const formattedDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <div className="bag-item">
      <div className="bag-gift-info">
        <h3>{bag.gift.name}</h3>
        <img
          src={bag.gift.image}
          alt="bag gift image"
          className="bag-gift-image"
        />
      </div>
      <div className="bag-details">
        <p>Total price: {bag.totalPrice.toFixed(2)}</p>
        <p>Added to bag on: {formattedDate(bag.createdAt)}</p>
      </div>
      <div className="bag-actions">
        <button
          className="delete-btn"
          onClick={() => onDelete(bag._id)}
          disabled={isDeleting}
        >
          {isDeleting ? 'Cancelling..' : 'Cancel'}
        </button>
      </div>
    </div>
  );
};
