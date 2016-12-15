- explain rxjs operators
- explain promises in short and why topromise
- explain observables?

- promises: returning an object in a promise operator (then, catch, finally, etc.) will wrap the object in a new promise automatically

De data property in .json().data is hoe de angular web api de json vormgeeft! In een echte app kan dit dus anders zijn.


result may look like this:
`getMovies(): Promise<Movie[]> {
    return this.http.get(this.moviesUrl)
               .toPromise()
               .then(response => response.json().data as Movie[])
               .catch(this.handleError);
  }`