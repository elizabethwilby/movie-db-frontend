import React from 'react';

interface SearchBarProps {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

function SearchBar({ search, setSearch }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={search}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;