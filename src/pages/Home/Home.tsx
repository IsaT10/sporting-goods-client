import Container from '@/components/Container';
import Hero from './sections/Hero';
import AllProducts from './sections/AllProducts';

export default function Home() {
  return (
    <Container>
      <Hero />
      <AllProducts />
    </Container>
  );
}
