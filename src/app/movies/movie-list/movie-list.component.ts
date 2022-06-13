import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie.interface';

@Component({
  selector: 'cw-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Input() movies: Movie[];
  @Output() movieClicked = new EventEmitter<Movie>();

  constructor() { }

  ngOnInit(): void {
  }

  onMovieClicked(movie: Movie) {
    this.movieClicked.emit(movie);
  }

}
