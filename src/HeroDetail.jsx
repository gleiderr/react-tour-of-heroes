import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import HeroService from './heroService';

const useHero = (id) => {
  const [hero, setHero] = useState();

  useEffect(() => {
    (async () => {
      const h = await HeroService.getHero(id);
      setHero(h);
    })();
  }, [id]);

  return [hero, setHero, HeroService.updateHero];
};

export function HeroDetail() {
  const { id } = useParams();
  const [hero, setHero, updateHero] = useHero(+id);
  const history = useHistory();

  const change = ({ target: { value } }) =>
    setHero({ id: hero.id, name: value });

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
