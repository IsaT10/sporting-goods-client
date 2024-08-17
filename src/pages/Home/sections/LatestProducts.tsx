import { useGetProductsQuery } from '@/redux/api/api';
import React from 'react';

export default function AllProducts() {
  // const [data, setData] = React.useState([]);

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:3000/api/v1/products');
  //       const jsonData = await response.json();
  //       setData(jsonData);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // console.log(data);

  const { data, error, isLoading } = useGetProductsQuery('');
  console.log(data);

  if (isLoading) return <p>loading...</p>;
  return <div>AllProducts</div>;
}
