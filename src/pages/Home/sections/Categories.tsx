import { Link } from 'react-router-dom';
const categories = ['Cricket', 'Football']; // Example categories

export default function Categories() {
  return (
    <div>
      {categories.map((category) => (
        <Link key={category} to={`/all-products?category=${category}`}>
          <button>{category}</button>
        </Link>
      ))}
    </div>
  );
}
