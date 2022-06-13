import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';

import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailComponent,
    MovieListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MoviesComponent
  ]
})
export class MoviesModule { }
