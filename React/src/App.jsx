import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Auth from './pages/Auth.jsx';
import Checkout from './pages/Checkout.jsx';
import Navbar from './components/Navbar.jsx';
import './App.css'
import AuthProvider from './context/AuthContext.jsx';
import CartProvider from './context/CartContext.jsx';
import ProductDetails from './pages/ProductDetails.jsx';

function App() {
 return (
    <>
    <AuthProvider>
      <CartProvider>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
      </CartProvider>
    </AuthProvider>
    </>
  );
}
 
export default App;

