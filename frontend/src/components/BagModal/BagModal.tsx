import React, { useState } from 'react';
import { Gift } from '../../types/types';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './bag-modal.css';
import { URL } from '../../constants/GlobalConstants';

interface BagModalProps {
  onModalClose: () => void;
  gift: Gift;
}

export const BagModal: React.FC<BagModalProps> = ({ onModalClose, gift }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const token = localStorage.getItem('access_token');

  const handleAddToBag = async (e: React.FormEvent) => {
    e.preventDefault();
    if (quantity < 1) {
      setError('Quantity must be at least 1');
      return;
    }
    if (quantity > gift.quantity) {
      setError('Quantity exceeds available stock');
      return;
    }
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.post(
        `${URL}/bags`,
        {
          giftId: gift._id,
          quantity,
        },
        config
      );
      setError(null);
      onModalClose();
      navigate('/dashboard');
    } catch (err: unknown) {
      // Get error message from backend response or use default message
      const errorMessage = (err as { response?: { data?: { error?: string } } })?.response?.data?.error || 'An error occurred while adding to bag.';
      setError(errorMessage);
    }
  };

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="bag-modal-title"
    >
      <div className="modal-content">
        <h2 id="bag-modal-title" className="modal-title">
          Add to Bag: {gift.name}
        </h2>
        <form onSubmit={handleAddToBag} className="bag-form">
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              min="1"
              max={gift.quantity}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              required
              aria-describedby="quantity-desc"
            />
            <small id="quantity-desc" className="input-helper">
              Available: {gift.quantity}
            </small>
          </div>
          <div className="price-summary">
            <p>
              Price per item: <strong>${gift.price.toFixed(2)}</strong>
            </p>
            <p>
              Total price:{' '}
              <strong>${(gift.price * quantity).toFixed(2)}</strong>
            </p>
          </div>
          {error && (
            <div className="error-container" role="alert">
              {error}
            </div>
          )}
          <div className="modal-actions">
            <button
              type="button"
              className="button button-secondary"
              onClick={onModalClose}
            >
              Cancel
            </button>
            <button type="submit" className="button button-primary">
              Add to Bag
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
