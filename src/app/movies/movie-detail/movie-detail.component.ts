import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie.interface';

@Component({
  selector: 'cw-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
