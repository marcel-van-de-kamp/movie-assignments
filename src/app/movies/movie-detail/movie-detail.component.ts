import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Movie } from '../movie.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'cw-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnChanges {
  @Input() movie: Movie;
  @Output() save = new EventEmitter<Movie>();

  movieForm = new FormGroup({
    name: new FormControl<string>('', [Validators.required, Validators.minLength(4)]),
    genre: new FormControl<string>('', [Validators.required]),
    rating: new FormControl<number>(0)
  })

  constructor() { }

  ngOnChanges(): void {
      this.movieForm.setValue({
        name: this.movie.name,
        genre: this.movie.genre,
        rating: this.movie.rating
      });
  }

  onSaveClicked() {
    if (this.movieForm.valid) {
      const movie: Movie = {
        genre: this.movieForm.value.genre,
        name: this.movieForm.value.name,
        rating: this.movieForm.value.rating,
        id: this.movie.id
      }
      this.save.emit(movie);
    } else {
      window.alert('error');
    }
    
  }

}
