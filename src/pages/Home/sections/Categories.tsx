import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';

const items = [
  {
    title: 'Football',
    img: 'https://i.ibb.co/LttjLmc/football-2.jpg',
  },
  {
    title: 'Baseball',
    img: 'https://i.ibb.co/6sTz9qt/baseball-2.jpg',
  },
  {
    title: 'Cycling',
    img: 'https://i.ibb.co/Y0rZ4Rc/cycling-1.jpg',
  },
  {
    title: 'Basketball',
    img: 'https://i.ibb.co/SJKYz05/basketball-9.jpg',
  },
  {
    title: 'Running',
    img: 'https://i.ibb.co/jwbSsWf/banner1.jpg',
  },
  {
    title: 'Tennis',
    img: 'https://i.ibb.co/NVP3S7w/tennis-1.jpg',
  },
  {
    title: 'Badminton',
    img: 'https://i.ibb.co/RgXpDxd/badminton-2.jpg',
  },
];

export default function Categories() {
  return (
    <div className='mb-28'>
      <Container>
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
