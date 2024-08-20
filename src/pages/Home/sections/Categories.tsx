import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import badminton2 from '../../../assets/images/badminton-2.jpg';
import football2 from '../../../assets/images/football-2.jpg';
import basketball9 from '../../../assets/images/basketball-9.jpg';
import tennis1 from '../../../assets/images/tennis-1.jpg';
import running1 from '../../../assets/images/braden-collum-9HI8UJMSdZA-unsplash.jpg';
import baseball2 from '../../../assets/images/baseball-2.jpg';
import cycling1 from '../../../assets/images/cycling-1.jpg';

const items = [
  {
    title: 'Football',
    img: football2,
  },
  {
    title: 'Baseball',
    img: baseball2,
  },
  {
    title: 'Cycling',
    img: cycling1,
  },
  {
    title: 'Basketball',
    img: basketball9,
  },
  {
    title: 'Running',
    img: running1,
  },
  {
    title: 'Tennis',
    img: tennis1,
  },
  {
    title: 'Badminton',
    img: badminton2,
  },
];

export default function Categories() {
  return (
    <div className='mb-28'>
      <Container>
        {/* {categories.map((category) => (
        <Link key={category} to={`/all-products?category=${category}`}>
          <button>{category}</button>
        </Link>
      ))} */}

        <SectionTitle
          title='Explore Our Categories'
          subTitle="Browse our diverse categories to find the perfect gear for every sport, activity, and adventure you're passionate about."
        />

        <BentoGrid>
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              img={item.img}
              className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
            />
          ))}
        </BentoGrid>
      </Container>
    </div>
  );
}
