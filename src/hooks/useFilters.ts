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
