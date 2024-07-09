import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about-us' element={<AboutUs />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}