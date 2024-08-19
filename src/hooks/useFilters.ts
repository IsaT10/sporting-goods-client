import React from 'react';
import useDebounce from '@/hooks/useDebounce';

type TInitialState = {
  searchTerm: string;
  brand: string;
  byPrice: string;
  byRating: string;
  category: string;
};

export default function useFilters(initialState: TInitialState) {
  const [filters, setFilters] = React.useState(initialState);

  const debouncedSearchTerm = useDebounce(filters.searchTerm, 500);

  const handleFilterChange = (
    key: keyof TInitialState,
    value: React.SetStateAction<string>
  ) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  const handleResetAll = () => {
    filters.category = 'all';
    setFilters(initialState);
  };

  return {
    filters: {
      ...filters,
      debouncedSearchTerm,
    },
    handleFilterChange,
    handleResetAll,
  };
}

// import { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import useDebounce from '@/hooks/useDebounce';

// const useFilters = (initialFilters) => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const searchParams = new URLSearchParams(location.search);

//   const [filters, setFilters] = useState({
//     searchTerm: searchParams.get('searchTerm') || initialFilters.searchTerm,
//     category: searchParams.get('category') || initialFilters.category,
//     brand: searchParams.get('brand') || initialFilters.brand,
//     byPrice: searchParams.get('sort') || initialFilters.byPrice,
//     byRating: searchParams.get('rating') || initialFilters.byRating,
//     page: Number(searchParams.get('page')) || initialFilters.page,
//   });

//   const debouncedSearchTerm = useDebounce(filters.searchTerm, 600);

//   useEffect(() => {
//     const params = new URLSearchParams();
//     if (filters.searchTerm) params.set('searchTerm', filters.searchTerm);
//     if (filters.category && filters.category !== 'all')
//       params.set('category', filters.category);
//     if (filters.brand && filters.brand !== 'all')
//       params.set('brand', filters.brand);
//     if (filters.byPrice) params.set('sort', filters.byPrice);
//     if (filters.byRating && filters.byRating !== 'all')
//       params.set('rating', filters.byRating);
//     params.set('page', filters.page.toString());
//     navigate(`?${params.toString()}`);
//   }, [filters, navigate]);

//   const handleFilterChange = (name, value) => {
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [name]: value,
//       page: 1, // Reset to first page on filter change
//     }));
//   };

//   const handlePageChange = (page) => {
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       page,
//     }));
//   };

//   const handleResetAll = () => {
//     setFilters(initialFilters);
//   };

//   return {
//     filters,
//     debouncedSearchTerm,
//     handleFilterChange,
//     handlePageChange,
//     handleResetAll,
//   };
// };

// export default useFilters;
