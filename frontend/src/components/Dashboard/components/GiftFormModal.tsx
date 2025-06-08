import { useState, useEffect } from 'react';
import { Gift } from '../../../types/types';
import './gift-form-modal.css';

interface GiftFormModalProps {
  onModalClose: () => void;
  onSubmit: (formData: Omit<Gift, '_id'>) => Promise<void>;
  editGift: Gift | null;
}

export const GiftFormModal: React.FC<GiftFormModalProps> = ({
  onModalClose,
  onSubmit,
  editGift,
}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [theme, setTheme] = useState<string[]>([]);
  const [image, setImage] = useState('');

  useEffect(() => {
    if (editGift) {
      setName(editGift.name);
      setDescription(editGift.description);
      setPrice(editGift.price);
      setQuantity(editGift.quantity);
      setTheme(editGift.theme);
      setImage(editGift.image);
    }
  }, [editGift]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      id: editGift?.id ?? null,
      name,
      description,
      price,
      quantity,
      theme,
      image,
    };

    await onSubmit(formData);
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const themeString = e.target.value;
    setTheme(themeString.split(',').map((item) => item.trim()));
  };

  return (
    <div className="gift-modal">
      <div className="modal-content">
        <span className="close" onClick={onModalClose}>
          &times;
        </span>
        <h3>{editGift ? 'Edit Gift' : 'Add new Gift'}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-gift-add-edit">
            <label>Name (of an item):</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-gift-add-edit">
            <label>Description:</label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="form-gift-add-edit">
            <label>Price:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              required
            />
          </div>
          <div className="form-gift-add-edit">
            <label>Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              required
            />
          </div>
          <div className="form-gift-add-edit">
            <label>Theme (separate by comma):</label>
            <input
              value={theme.join(',')}
              onChange={handleThemeChange}
              required
            />
          </div>
          <div className="form-gift-add-edit">
            <label>Image URL:</label>
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="button">
            {editGift ? 'Update Gift' : 'Add Gift'}
          </button>
        </form>
      </div>
    </div>
  );
};
