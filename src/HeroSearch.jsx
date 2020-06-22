import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSearch } from './controller';
import styles, { ul, li, a } from './styles/HeroSearch.module.css';
import classnames from 'classnames';

export function HeroSearch() {
  const [name, setName] = useState();
  const [heroes] = useSearch(name);

  const search = ({ target: { value: name } }) => setName(name);

  const Heroes = () =>
    heroes.map((hero) => (
      <li key={hero.id} className={li}>
        <Link className={a} to={`/detail/${hero.id}`}>
          {hero.name}
        </Link>
      </li>
    ));

  return (
    <div id='search-component'>
      <h4>
        <label htmlFor='search-box'>Hero Search</label>
      </h4>

      <input className={styles['search-box']} onChange={search} />

      <ul className={classnames(styles['search-result'], ul)}>
        <Heroes />
      </ul>
    </div>
  );
}
