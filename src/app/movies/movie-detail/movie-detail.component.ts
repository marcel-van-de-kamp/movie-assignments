import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Movie } from '../movie.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'cw-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnChanges {
  @Input() movie: Movie;
  @Output() save = new EventEmitter<Movie>();

  movieForm: FormGroup;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.movie.currentValue && !changes.movie.firstChange) {
      this.movieForm.setValue({
        name: this.movie.name,
        genre: this.movie.genre,
        rating: this.movie.rating
      })

    }
  }

  ngOnInit(): void {
    this.movieForm = new FormGroup({
      name: new FormControl(this.movie.name, [Validators.required, Validators.minLength(4)]),
      genre: new FormControl(this.movie.genre, [Validators.required]),
      rating: new FormControl(this.movie.rating)
    })
  }

  onSaveClicked() {
    if (this.movieForm.valid) {
      const movie: Movie = {
        ...this.movieForm.value,
        id: this.movie.id
      }
      this.save.emit(movie);
    } else {
      window.alert('error');
    }
    
  }

}
