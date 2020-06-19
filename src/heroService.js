import MessageService from './messageService';

const TIME = 50;
let heroes = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' },
];

export default class HeroService {
  /** GET heroes from the server */
  static getHeroes() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(heroes), TIME);
    });
  }

  /** GET hero by id. Will 404 if id not found */
  static getHero(id) {
    return new Promise((resolve, reject) => {
      const hero = heroes.find(({ id: id_hero }) => id_hero === id);
      setTimeout(
        () =>
          hero ? resolve(hero) : this.handleError(reject, `getHero id=${id}`),
        TIME
      );
    });
  }

  /* GET heroes whose name contains search term */
  static searchHeroes(term) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!term.trim()) resolve([]); // if not search term, return empty hero array.

        const matches = heroes.filter((hero) => hero.name.includes(term));

        if (matches.length) HeroService.log(`found heroes matching "${term}"`);
        else HeroService.log(`no heroes matching "${term}"`);

        resolve(matches);
      }, TIME);
    });
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  static addHero(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const id = Math.max(...heroes.map((hero) => hero.id)) + 1;
        heroes.push({ id, name });

        HeroService.log(`added hero w/ id=${id}`);
        resolve(heroes);
      }, TIME);
    });
  }

  /** DELETE: delete the hero from the server */
  static deleteHero(id) {
    return new Promise(async (resolve, reject) => {
      const hero = await HeroService.getHero(id);
      setTimeout(() => {
        if (!hero) this.handleError(reject, `deleteHero id=${id}`);

        heroes = heroes.filter((hero) => hero.id !== id);

        resolve(heroes);
      }, TIME);
    });
  }

  // /** PUT: update the hero on the server */
  static updateHero(hero) {
    const { id, name } = hero;
    return new Promise(async (resolve, reject) => {
      const hero = await HeroService.getHero(id);
      setTimeout(() => {
        if (!hero) this.handleError(reject, `updateHero id=${id}`);

        hero.name = name;

        resolve(hero);
      }, TIME);
    });
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  static handleError(reject, error) {
    console.error(error);

    HeroService.log(`failed: ${error}`);

    reject(error);
  }

  // /** Log a HeroService message with the MessageService */
  static log(message) {
    MessageService.add(`HeroService: ${message}`);
  }
}
