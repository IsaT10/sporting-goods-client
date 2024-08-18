import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import img from '../../../assets/images/badminton-1.jpg';
import badminton1 from '../../../assets/images/badminton-1.jpg';
import badminton2 from '../../../assets/images/badminton-2.jpg';
import badminton3 from '../../../assets/images/badminton-3.jpg';
import volleyball1 from '../../../assets/images/volleyball-1.jpg';
import volleyball2 from '../../../assets/images/volleyball-2.jpg';
import volleyball3 from '../../../assets/images/volleyball-3.jpg';
// Cricket
import cricket1 from '../../../assets/images/cricket-1.jpg';
import cricket2 from '../../../assets/images/cricket-2.jpg';
import cricket3 from '../../../assets/images/cricket-3.jpg';
import cricket4 from '../../../assets/images/cricket-4.jpg';
import cricket5 from '../../../assets/images/cricket-5.jpg';

// Football
import football1 from '../../../assets/images/football-1.jpg';
import football2 from '../../../assets/images/football-2.jpg';
import football3 from '../../../assets/images/football-3.jpg';
import football4 from '../../../assets/images/football-4.jpg';
import football5 from '../../../assets/images/football-5.jpg';

// Basketball
import basketball1 from '../../../assets/images/basketba;ll-1.jpg';
import basketball2 from '../../../assets/images/basketball-2.jpg';
import basketball3 from '../../../assets/images/basketball-3.jpg';
import basketball4 from '../../../assets/images/basketball-4.jpg';
import basketball6 from '../../../assets/images/basketball-6.jpg';
import basketball7 from '../../../assets/images/basketball-7.jpg';
import basketball8 from '../../../assets/images/basketball-8.jpg';
import basketball9 from '../../../assets/images/basketball-9.jpg';

// Tennis
import tennis1 from '../../../assets/images/tennis-1.jpg';
import tennis2 from '../../../assets/images/tennis-2.jpg';
import tennis3 from '../../../assets/images/tennis-3.jpg';
import tennis4 from '../../../assets/images/tennis-4.jpg';
import tennis5 from '../../../assets/images/tennis-5.jpg';

// Golf
import golf1 from '../../../assets/images/golf-1.jpg';
import golf2 from '../../../assets/images/golf-2.jpg';
import golf3 from '../../../assets/images/golf-3.jpg';
import golf4 from '../../../assets/images/golf-4.jpg';
import golf5 from '../../../assets/images/golf-5.jpg';

// Running
import running1 from '../../../assets/images/braden-collum-9HI8UJMSdZA-unsplash.jpg';
import running2 from '../../../assets/images/running-2.jpg';
import running3 from '../../../assets/images/running-3.jpg';
import running4 from '../../../assets/images/running-4.jpg';
import running5 from '../../../assets/images/running-5.jpg';

// Baseball
import baseball1 from '../../../assets/images/baseball-1.jpg';
import baseball2 from '../../../assets/images/baseball-2.jpg';
import baseball3 from '../../../assets/images/baseball-3.jpg';
import baseball4 from '../../../assets/images/baseball-4.jpg';
import baseball5 from '../../../assets/images/baseball-5.jpg';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { cn } from '@/lib/utils';
// import React from 'react';
// const categories = ['Cricket', 'Football']; // Example categories

const Skeleton = () => (
  // <div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100'></div>
  <img
    className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl '
    src={img}
    alt=''
  />
);
const items = [
  {
    title: 'Football',
    img: football2,
  },
  {
    title: 'Cricket',
    img: cricket2,
  },
  {
    title: 'Volleyball',
    img: volleyball3,
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
    title: 'Golf',
    img: golf4,
  },
  {
    title: 'Badminton',
    img: badminton2,
  },
];

export default function Categories() {
  return (
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

      <BentoGrid className=''>
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
  );
}
