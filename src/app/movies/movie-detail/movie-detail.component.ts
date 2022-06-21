import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Movie } from '../movie.interface';

@Component({
  selector: 'cw-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie;
  @Output() save = new EventEmitter<Movie>();

  constructor() { }

  ngOnInit(): void {
  }

  onSaveClicked(value: Movie, valid: boolean) {
    if (valid) {
      const movie: Movie = {
        id: this.movie.id,
        ...value,
      };

      this.save.emit(movie);
    } else {
      window.alert('error!!');
    }
  }

}
