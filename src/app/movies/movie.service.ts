import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesUrl = 'api/movies';
  private movies = 'api/moviesFav';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    const result = this.http.get<Movie[]>(this.moviesUrl);

    return result;
  }
}
