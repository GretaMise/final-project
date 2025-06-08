import {  Review } from '../../../types/types';
import './review-card.css';

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
  const formattedDate = new Date(review.createdAt).toLocaleDateString('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
  return (
    <div className="reviews-card">
      <div className="review-card">
        {/* <div className="review-card-author"> */}
        <div className="author-avatar">{review.name[0]}</div>
        <h2>{review.rating} / 10</h2>
        <h2>{review.name}</h2>
        <h3 className="review-text">{review.comment}</h3>
        <span className="review-date">{formattedDate}</span>
        {/* </div> */}
      </div>
      <br />
      {/* <div className="review-card-content">
        <p className="review-text">{review.comment}</p>
        <p className="review-date">{formattedDate}</p>
      </div> */}
    </div>
  );
};
