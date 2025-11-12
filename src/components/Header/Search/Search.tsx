import React from 'react';
import styles from './Search.module.scss';
import SearchIcon from '@/components/icons/SearchIcon';

interface SearchProps {
  query: string;
  setQuery: (query: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const Search = ({ query, setQuery, handleSubmit }: SearchProps) => {
  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit} role="search">
      <input
        type="text"
        className={styles.search}
        placeholder="Поиск по рецептам"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Поиск по рецептам"
      />
      <SearchIcon className={styles.searchIcon} aria-hidden="true" />
      <button type="submit" className={styles.searchButton} aria-label="Найти рецепт">
        Найти
      </button>
    </form>
  );
};

export default Search;
