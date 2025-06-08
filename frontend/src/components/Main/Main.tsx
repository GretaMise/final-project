import { useState, useEffect } from 'react';
import './main.css';
import axios from 'axios';
import { GiftCard } from '../GiftCard/GiftCard';
import { BagModal } from '../BagModal/BagModal';
import { Gift } from '../../types/types';
import { URL } from '../../constants/GlobalConstants';

export const Main = () => {
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);

  useEffect(() => {
    const fetchGifts = async () => {
      try {
        const response = await axios.get(`${URL}/gifts`);
        setGifts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGifts();
  }, []);

  const handleGiftSelect = (gift: Gift) => {
    setSelectedGift(gift);
  };

  const handleModalClose = () => {
    setSelectedGift(null);
  };

  return (
    <section className="main-details-container">
      <div className="main-container">
        <div className="introduction-container">
          <h1>Welcome to Witty Wraps - Where Every Gift Tells a Story!</h1>
          <p>
            At Witty Wraps, we believe that every gift is more than just an
            item; it's a heartfelt expression of love, appreciation, and
            thoughtfulness. Our mission is to transform your gifts into
            memorable experiences through our unique and creative wrapping
            solutions.
            <br />
            <br />
            Whether you're celebrating a birthday, an anniversary, or just want
            to brighten someone's day, our carefully curated selection of
            wrapping materials and designs will add that special touch to your
            presents. Each wrap is crafted with care, ensuring that your gift
            not only looks beautiful but also tells a story that resonates with
            the recipient.
            <br />
            <br />
            Join us on this journey of creativity and joy, and let us help you
            make every occasion unforgettable. Explore our collection and
            discover how Witty Wraps can elevate your gifting experience!
          </p>
        </div>
      </div>
      <div className="main-container-2">
        <h2>Check out our offers to choose a thoughtful gift </h2>
        <div className="gift-list">
          {gifts.map((gift) => (
            <GiftCard key={gift.id} gift={gift} onGiftSelect={handleGiftSelect} />
          ))}
        </div>
      </div>
      {selectedGift && (
        <BagModal
          gift={selectedGift}
          onModalClose={handleModalClose}
        />
      )}
    </section>
  );
};
