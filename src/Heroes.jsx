import classNames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHeroes } from './controller/controller';
import styles, { badge, button, heroes as classHeroes } from './styles/Heroes.module.css';

export function Heroes() {
  const [heroes, addHero, deleteHero] = useHeroes();
  const [name, setName] = useState('');

  const change = ({ target: { value: name } }) => setName(name);
  const add = () => {
    addHero(name);
    setName('');
  };

  return (
    <>
      <h2>My Heroes</h2>
      <div>
        <label>
          Hero name: <input value={name} onChange={change} />
        </label>
        {/* <!-- (click) passes input value to add() and then clears the input --> */}
        <button className={button} onClick={add}>
          add
        </button>
      </div>

      <ul className={classHeroes}>
        <HeroesList heroes={heroes} deleteHero={deleteHero} />
      </ul>
    </>
  );
}

function HeroesList({ heroes, deleteHero }) {
  return heroes.map(({ id, name }) => (
    <li key={id}>
      <Link to={`/detail/${id}`}>
        <span className={badge}>{id}</span> {name}
      </Link>
      <button
        className={classNames(button, styles.delete)}
        title='delete hero'
        onClick={() => deleteHero(id)}
      >
        x
      </button>
    </li>
  ));
}
