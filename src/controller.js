import { useState, useEffect } from 'react';
import HeroService from './heroService';

export const useHeroes = () => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    (async () => {
      const heroes = await HeroService.getHeroes();
      setHeroes(heroes);
    })();
  }, []);
  return [heroes];
};

export const useHero = (id) => {
  const [hero, setHero] = useState();

  useEffect(() => {
    (async () => {
      const h = await HeroService.getHero(id);
      setHero(h);
    })();
  }, [id]);

  return [hero, setHero, HeroService.updateHero];
};