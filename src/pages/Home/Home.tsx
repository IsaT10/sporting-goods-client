import Container from '@/components/Container';
import Hero from './sections/Hero';
import AllProducts from './sections/AllProducts';
import Categories from './sections/Categories';

export default function Home() {
  return (
    <Container>
      <Hero />
      <AllProducts />
      <Categories />
    </Container>
  );
}
