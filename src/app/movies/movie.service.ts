import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  updateMovie(movie: Movie) {
    const url = `${this.moviesUrl}/${movie.id}`;

    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    return this.http.put(url, movie, options);
  }
}
