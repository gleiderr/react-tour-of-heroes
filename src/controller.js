import { useState, useEffect } from 'react';
import HeroService from './heroService';
import MessageService from './messageService';

export const useHeroes = () => {
  const [heroes, setHeroes] = useState([]);

  const addHero = async (name) => {
    const heroes = await HeroService.addHero(name);
    setHeroes([...heroes]);
  };

  const deleteHero = async (id) => {
    const heroes = await HeroService.deleteHero(+id);
    setHeroes([...heroes]);
  };

  useEffect(() => {
    (async () => {
      const heroes = await HeroService.getHeroes();
      setHeroes([...heroes]);
    })();
  }, []);

  return [heroes, addHero, deleteHero];
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

export const useSearch = (name) => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    if (name) {
      (async () => {
        const heroes = await HeroService.searchHeroes(name);
        setHeroes(heroes);
      })();
    }
  }, [name]);

  return [heroes];
};

export const useMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    MessageService.onChange((messages) => setMessages([...messages]));
  });

  return [messages, MessageService.clear];
};
