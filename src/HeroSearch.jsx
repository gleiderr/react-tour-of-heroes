import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSearch } from './controller';
import './styles/hero-search.css';

export function HeroSearch() {
  const [name, setName] = useState();
  const [heroes] = useSearch(name);

  const search = ({ target: { value: name } }) => setName(name);

  const Heroes = () =>
    heroes.map((hero) => (
      <li key={hero.id}>
        <Link to={`/detail/${hero.id}`}>{hero.name}</Link>
      </li>
    ));

  return (
    <div id='search-component'>
      <h4>
        <label htmlFor='search-box'>Hero Search</label>
      </h4>

      <input id='search-box' onChange={search} />

      <ul className='search-result'>
        <Heroes />
      </ul>
    </div>
  );
}
