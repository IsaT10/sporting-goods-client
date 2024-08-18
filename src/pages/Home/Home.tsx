import Hero from './sections/Hero';
import AllProducts from './sections/LatestProducts';
import Categories from './sections/Categories';
import Testimonial from './sections/Testimonial';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <AllProducts />
      <Categories />
      <Testimonial />
      {/* <FAQ /> */}
      <Contact />
    </>
  );
}
