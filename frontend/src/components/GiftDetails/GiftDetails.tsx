import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './gifts-card.css';
import { Gift } from '../../types/types';
import axios from 'axios';
import { URL } from '../../constants/GlobalConstants';
import { AuthContext } from '../../context/AuthContext';
import { BagModal } from '../BagModal/BagModal';

export const GiftDetails = () => {
  const navigate = useNavigate();
  const [gift, setGift] = useState<Gift | null>(null);
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [isBagModalVisible, setIsBagModalVisible] = useState(false);

  useEffect(() => {
    const fetchGiftDetails = async () => {
      const response = await axios.get(`${URL}/gifts/${id}`);
      setGift(response.data);
    };

    fetchGiftDetails();
  }, [id]);

  const handleBackClick = () => {
    navigate('/');
  };

  const handleReserveClick = () => {
    if (!user) {
      navigate('/login');
      return;
    }

    setIsBagModalVisible(true);
  };

  return (
    <section className="gift-detail-whole">
      <article className="gift-card-container">
        <div className="gift-card-image-wrapper">
          <img src={gift?.image} alt="Gift" className="gift-card-image" />
        </div>
        <div className="gift-card-content">
          <header className="gift-card-header">
            <h1 className="gift-card-title">{gift?.name}</h1>
            <p className="gift-card-description">{gift?.description}</p>
          </header>

          <section className="gift-card-details">
            <dl className="gift-card-specs">
              <div className="spec-item">
                <dt className="spec-label">Theme</dt>
                <dd className="spec-value">{gift?.theme?.join(', ')}</dd>
              </div>
              <div className="spec-item">
                <dt className="spec-label">Price</dt>
                <dd className="spec-value">${gift?.price}</dd>
              </div>
            </dl>
          </section>

          <nav className="gift-card-actions">
            <button
              className="btn-primary"
              onClick={handleReserveClick}
              type="button"
            >
              Add to bag
            </button>
            <button
              className="btn-secondary"
              onClick={handleBackClick}
              type="button"
            >
              Back to main
            </button>
          </nav>
        </div>
      </article>
      {isBagModalVisible && gift && (
        <BagModal
          onModalClose={() => setIsBagModalVisible(false)}
          gift={gift}
        />
      )}
    </section>
  );
};
