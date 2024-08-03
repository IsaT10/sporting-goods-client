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

export default function App() {
  return (
    <div className='text-primary'>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about-us' element={<AboutUs />} />
            <Route path='all-products' element={<AllProducts />} />
            <Route path='manage-products' element={<ManageProducts />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
