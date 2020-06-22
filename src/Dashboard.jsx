import React from 'react';
import { Link } from 'react-router-dom';
import { useHeroes } from './controller';
import styles, { a, h3, h4, module, grid } from './styles/Dashboard.module.css';
import { HeroSearch } from './HeroSearch';
import classNames from 'classnames';

export function Dashboard() {
  const [heroes] = useHeroes();
  const topHeroes = heroes.slice(1, 5);

  const TopHeroes = () =>
    topHeroes.map((hero) => (
      <Link key={hero.id} className={classNames(styles['col-1-4'], a)} to={`/detail/${hero.id}`}>
        <div className={classNames(module, 'hero')}>
          <h4 className={h4}>{hero.name}</h4>
        </div>
      </Link>
    ));

  return (
    <>
      <h3 className={h3}>Top Heroes</h3>
      <div className={classNames(grid, styles['grid-pad'])}>
        <TopHeroes />
      </div>

      <HeroSearch />
    </>
  );
}
