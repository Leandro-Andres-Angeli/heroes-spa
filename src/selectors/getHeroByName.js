import { heroes } from '../data/heroes';

export const getHeroByName = (name) => {

  if (name.trim() === '') return [];
  return heroes.filter(({ superhero }) =>
    superhero.toLowerCase().includes(name.toLowerCase())
  );
};
