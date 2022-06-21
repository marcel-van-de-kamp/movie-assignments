import { Component, OnInit } from '@angular/core';
import { Movie } from './movie.interface';
import { MovieService } from './movie.service';

@Component({
  selector: 'cw-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  selectedMovie: Movie;
  
  // for the async pipe solution
  // movies$: Observable<Movie[]>;

  constructor(private movieService: MovieService) {
    
  }

  ngOnInit(): void {
    this.getMovies();
  }

  onMovieSelected(movie: Movie) {
    this.selectedMovie = {...movie};
  }

  onSaveMovie(movie: Movie) {
    this.movieService.updateMovie(movie).subscribe({
      next: () => {
        console.log('succes');
        this.getMovies();
      }
    });
  }

  private getMovies(): void {
    // this.movies$ = this.movieService.getMovies();

    const result = this.movieService.getMovies();
    
    result.subscribe({
      next: (movies: Movie[]) =>  {
        this.movies = movies;
      },
      error: (err: Error) => { 
        // do something with an error...
      },
      complete: () => { 
        // do something when the observer completes, often not needed.... 
      }
    });
  }

}
