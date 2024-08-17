import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUs';
import Layout from './components/layout/Layout';
import Home from './pages/Home/Home';
import 'swiper/css';
import ManageProducts from './pages/ManageProducts/ManageProducts';
import AllProducts from './pages/AllProducts/AllProducts';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';

export default function App() {
  return (
    <div className='text-primary'>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about-us' element={<AboutUs />} />
            <Route path='all-products' element={<AllProducts />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='cart' element={<Cart />} />
            <Route path='product/:id' element={<ProductDetails />} />
            <Route path='manage-products' element={<ManageProducts />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
