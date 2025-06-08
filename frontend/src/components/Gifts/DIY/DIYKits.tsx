import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { URL } from '../../../constants/GlobalConstants';
import '../gifts.css';
import { Gift } from '../../../types/types';
import { GiftCard } from '../../GiftCard/GiftCard';
import { BagModal } from '../../BagModal/BagModal';

export const DIYKits: React.FC = () => {
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);

  useEffect(() => {
    const fetchDIYGifts = async () => {
      try {
        const response = await axios.get(`${URL}/gifts`);
        const diyGifts = response.data.filter((gift: Gift) =>
          gift.theme.some((theme) => theme.toLowerCase().includes('diy'))
        );
        setGifts(diyGifts);
      } catch (err) {
        setError('Failed to fetch DIY gifts');
      } finally {
        setIsLoading(false);
      }
    };

    fetchDIYGifts();
  }, []);

  const handleGiftSelect = (gift: Gift) => {
    setSelectedGift(gift);
  };

  const handleModalClose = () => {
    setSelectedGift(null);
  };

  if (isLoading) {
    return <div className="loading">Loading DIY gifts...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (gifts.length === 0) {
    return (
      <div className="no-gifts">No DIY gifts available at the moment.</div>
    );
  }

  return (
    <div className="gifts-container">
      <h2 className="gifts-title">DIY Gift Kits</h2>
      <p className="gifts-subtitle">
        Creative projects for hands-on gift recipients
      </p>
      <div className="gifts-grid">
        {gifts.map((gift) => (
          <GiftCard
            key={gift._id}
            gift={gift}
            onGiftSelect={handleGiftSelect}
          />
        ))}
      </div>
      {selectedGift && (
        <BagModal gift={selectedGift} onModalClose={handleModalClose} />
      )}
    </div>
  );
};
