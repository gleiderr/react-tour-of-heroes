import React from 'react';
import { useState } from 'react';
import { useHeroes } from './controller';
import { Link } from 'react-router-dom';
import styles, {
  badge,
  button,
  heroes as classHeroes,
} from './styles/Heroes.module.css';
import classNames from 'classnames';

export function Heroes() {
  const [heroes] = useHeroes();
  const [name, setName] = useState('');

  const change = ({ target: { value: name } }) => setName(name);
  const add = () => {};
  const del = () => {};

  const HeroesList = () =>
    heroes.map(({ id, name }) => (
      <li key={id}>
        <Link to={`/detail/${id}`}>
          <span className={badge}>{id}</span> {name}
        </Link>
        <button
          className={classNames(button, styles.delete)}
          title='delete hero'
          onClick={() => del(id)}
        >
          x
        </button>
      </li>
    ));

  console.log(styles);

  return (
    <>
      <h2>My Heroes</h2>
      <div>
        <label>
          Hero name:
          <input value={name} onChange={change} />
        </label>
        {/* <!-- (click) passes input value to add() and then clears the input --> */}
        <button className={button} onClick={add}>
          add
        </button>
      </div>

      <ul className={classHeroes}>
        <HeroesList />
      </ul>
    </>
  );
}
