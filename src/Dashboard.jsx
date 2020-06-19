import React from 'react';
import { Link } from 'react-router-dom';
import { useHeroes } from './controller';
import './styles/dashboard.css';

export function Dashboard({ heroService }) {
  const [heroes] = useHeroes();
  const topHeroes = heroes.slice(1, 5);

  const TopHeroes = () =>
    topHeroes.map((hero, id) => (
      <Link key={hero.id} className='col-1-4' to={`/detail/${hero.id}`}>
        <div className='module hero'>
          <h4>{hero.name}</h4>
        </div>
      </Link>
    ));

  return (
    <>
      <h3>Top Heroes</h3>
      <div className='grid grid-pad'>
        <TopHeroes />
      </div>

      <app-hero-search></app-hero-search>
    </>
  );
}
