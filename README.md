This READMR.md is generated with AI.

Kind regards, Greta

# Witty Wraps

A full-stack e-commerce application for gift wrapping services and curated gifts.

## Features

- User authentication and authorization
- Gift browsing and shopping cart functionality
- Review system
- Admin dashboard for managing products, orders, and users
- Responsive design for all devices

## Tech Stack

### Frontend

- React with TypeScript
- React Router for navigation
- Axios for API calls
- CSS for styling

### Backend

- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/witty-wraps.git
cd witty-wraps
```

2. Install backend dependencies

```bash
cd backend
npm install
```

3. Install frontend dependencies

```bash
cd ../frontend
npm install
```

4. Create a .env file in the backend directory with the following variables:

```
PORT=3016
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

5. Start the backend server

```bash
cd backend
npm run dev
```

6. Start the frontend development server

```bash
cd frontend
npm run dev
```

The application should now be running at `http://localhost:5173` (frontend) and `http://localhost:3016` (backend).

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.
