import { useNavigate } from 'react-router-dom';
import { Gift } from '../../types/types';
import './gift-card.css';

interface GiftCardProps {
  gift: Gift;
  onGiftSelect?: (gift: Gift) => void;
}

export const GiftCard = ({ gift, onGiftSelect }: GiftCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onGiftSelect) {
      onGiftSelect(gift);
    } else {
      navigate(`/gifts/${gift._id}`);
    }
  };

  return (
    <div className="gift-card" onClick={handleClick}>
      <img src={gift.image} alt={gift.name} className="gift-image" />
      <div className="gift-content">
        <h3>{gift.name}</h3>
        <h2>${gift.price.toFixed(2)}</h2>
        <p>{gift.description}</p>
        <div className="gift-meta">
          <span className="gift-stock">In stock: {gift.quantity}</span>
          <span className="gift-theme">{gift.theme.join(', ')}</span>
        </div>
      </div>
    </div>
  );
};
