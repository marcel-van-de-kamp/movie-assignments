import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let movies = [
        {
          id: 1,
          name: 'Star Wars',
          genre: 'SciFi',
          rating: 9
        },
        {
          id: 2,
          name: 'Armageddon',
          genre: 'Scifi',
          rating: 8
        },
        {
          id: 3,
          name: 'Twister',
          genre: 'SciFi',
          rating: 7
        }
      ];

      let moviesFav = [
        {
            id: 1,
            name: 'terminator',
            genre: 'scifi',
            rating: 9
        },
        {
            id: 2,
            name: 'star wars',
            genre: 'scifi',
            rating: 8
        },
        {
            id: 3,
            name: 'pulp fiction',
            genre: 'drama',
            rating: 7
        },
        {
            id: 4,
            name: 'shrek',
            genre: 'animation',
            rating: 5
        }
      ]

      return {movies, moviesFav};
  }
}
