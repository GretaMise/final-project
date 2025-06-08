import axios from 'axios';
import { useEffect, useState } from 'react';
import './reviews-page.css';
import { Review } from '../../../types/types';
import { ReviewCard } from '../ReviewCard/ReviewCard';
import { ReviewModal } from '../ReviewModal/ReviewModal';
import { URL } from '../../../constants/GlobalConstants';

export const ReviewsPage = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const fetchReviews = async () => {
    try {
      const response = await axios.get(`${URL}/reviews`);
      setReviews(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <>
      <div className="review-page-header">
        <h1>Reviews</h1>

        <h3 className="review-page-header-info">
          At Witty Wraps, we value the opinions of our customers. This page is
          dedicated to showcasing the experiences and feedback from those who
          have used our products. Here, you can read honest reviews, ratings,
          and comments from our community, helping you make informed decisions.
          We encourage you to share your own thoughts and join the conversation!{' '}
          <br /> <br />
          Thank you for being a part of our journey!
        </h3>
        <button
          className="add-review-button"
          onClick={() => setIsModalVisible(true)}
        >
          Leave a review
        </button>
      </div>
      <div className="review-page">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
      {isModalVisible && (
        <ReviewModal
          onModalClose={() => setIsModalVisible(false)}
          onSuccess={fetchReviews}
        />
      )}
    </>
  );
};
