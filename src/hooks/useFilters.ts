import React from 'react';
import useDebounce from '@/hooks/useDebounce';

export default function useFilters(initialState) {
  const [filters, setFilters] = React.useState(initialState);

  const debouncedSearchTerm = useDebounce(filters.searchTerm, 500);

  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  const handleResetAll = () => {
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
