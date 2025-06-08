export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  _id: string;
  name: string;
  comment: string;
  rating: number;
  createdAt: string;
  image: string;
}

export interface Gift {
  id: string | number | null;
  _id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  theme: string[];
  image: string;
}

export interface Bag {
  _id: string;
  giftId: string;
  userId: string;
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
  gift: {
    _id: string;
    name: string;
    theme: string[];
    quantity: number;
    price: number;
    image: string;
  };
}

export interface AdminBag {
  _id: string;
  gift: Gift;
  totalPrice: number;
  createdAt: string;
  user: {
    _id: string;
    name: string;
    email: string;
  };
}
