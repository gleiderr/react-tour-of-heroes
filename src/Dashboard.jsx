import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/dashboard.css';

export function Dashboard({ heroService }) {
  const [topHeroes, setTopHeroes] = useState([]);

  useEffect(() => {
    (async () => {
      const heroes = await heroService.getHeroes();
      setTopHeroes(heroes.slice(1, 5));
    })();
  });

  const links = topHeroes.map((hero, id) => (
    <Link key={hero.id} className='col-1-4' to={`/detail/${hero.id}`}>
      <div class='module hero'>
        <h4>{hero.name}</h4>
      </div>
    </Link>
  ));

  return (
    <>
      <h3>Top Heroes</h3>
      <div class='grid grid-pad'>{links}</div>

      <app-hero-search></app-hero-search>
    </>
  );
}
