import { useState } from 'react';
import axios from 'axios';
import './review-modal.css';
import { URL } from '../../../constants/GlobalConstants';

interface ReviewModalProps {
  onModalClose: () => void;
  onSuccess: () => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({
  onModalClose,
  onSuccess,
}) => {
  const [name, setName] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event?.preventDefault();

    try {
      await axios.post(`${URL}/reviews`, {
        name,
        comment,
        rating,
      });
      onModalClose();
      onSuccess();
      setError(null);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.error ||
          'Error, we are sorry your review did not went through';

        setError(errorMessage);
      }
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Leave a review</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full name</label>
            <input
              type="text"
              id="name"
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Review</label>
            <textarea
              id="description"
              rows={4}
              onChange={(event) => setComment(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <input
              type="number"
              id="rating"
              placeholder="from 1 to 10"
              onChange={(event) => setRating(Number(event.target.value))}
              required
            />
          </div>
          {error && <div className="error-container">{error}</div>}
          <div className="modal-actions">
            <button type="button" onClick={onModalClose}>
              Cancel
            </button>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
