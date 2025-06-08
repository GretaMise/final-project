import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { Login } from './components/Login/LoginForm';
import { Register } from './components/Register/Register';
import { Main } from './components/Main/Main';
import { ReviewsPage } from './components/Reviews/ReviewsPage/ReviewsPage';
import { Footer } from './components/Footer/Footer';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Services } from './components/Services/Services';
import { Contact } from './components/Contact/Contact';
import { PrivacyPolicy } from './components/PrivacyPolicy/PrivacyPolicy';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { Dashboard } from './components/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <Navigation />
          <main className="main">
            {/* <GiftDetails /> */}
            {/* <Main /> */}
            <Routes>
              <Route path="/" element={<Main />} />
              {/* <Route path='/gifts/:id' element={<GiftDetails />}/> */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
            </Routes>
          </main>
        </div>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
