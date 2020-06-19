import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useHero } from './controller';
import './styles/hero-detail.css';

export function HeroDetail() {
  const { id } = useParams();
  const history = useHistory();

  const [hero, setHero, updateHero] = useHero(+id);

  const change = ({ target: { value: name } }) => setHero({ id: +id, name });
  const save = () => updateHero(hero);

  return (
    <>
      {!hero ? null : (
        <div>
          <h2>{hero.name.toUpperCase()} Details</h2>
          <div>
            <span>id: </span>
            {hero.id}
          </div>
          <div>
            <label>
              name:
              <input value={hero.name} placeholder='name' onChange={change} />
            </label>
          </div>
          <button onClick={history.goBack}>go back</button>
          <button onClick={save}>save</button>
        </div>
      )}
    </>
  );
}
