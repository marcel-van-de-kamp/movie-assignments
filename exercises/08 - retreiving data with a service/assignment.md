Assignment 8: Getting movies from a remote server
==============================================

> ## Use the angular http service to get movies from a remote/stub server

> We already set up the 'angular in memory web api' for you to stub a remote server and return mock data. See `stub-server.md` for info on how to set it up.

**Links**:
- [angular http client](https://angular.io/guide/http)
- [convert to promise](https://angular-2-training-book.rangle.io/handout/http/requests_as_promises.html)
- [rxjs](http://reactivex.io/rxjs/manual/overview.html#introduction)
- [rxjs observable](http://reactivex.io/documentation/observable.html)
- [using observables](https://angular-2-training-book.rangle.io/handout/observables/using_observables.html)
- [promises](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [typescript generics](https://www.typescriptlang.org/docs/handbook/generics.html)

**Steps**:
- Import the `HttpClientModule` from `'@angular/common/http'` into the `app.module` file and add it to the `imports` array of the module.
- Import the `HttpClient` service from `'@angular/common/http'` into the `movie.service`.
- Add a parameter `http` to the constructor and type it as `HttpClient`.
- Declare two private constant properties `moviesUrl` and `moviesFavUrl` in the `movie.service` and assign the values `'api/movies'` and `'api/moviesFav'` to them.
>  We will edit the `getMovies` function to use the `httpClient` to asynchronously get the remote movie data:
- Remove the hardcoded array of movies from the `getMovies` function.
- In the `getMovies` function, call the `get` function on the `http` service and supply the `moviesUrl` as single parameter. The get function will return a result. Assign this result to a new variable `observe`.
> The `HttpClient` service fetches data from a server over http and returns an `Observable` object from the `rxjs` library. `Observables` can be used in multiple use cases, but may be a little overkill when just retreiving data by means of a single http call. Therefore, as an intermediate step, we will convert the `observe` variable to a more familiar `Promise` object:
- Change/Add the return type of the `getMovies` function to `Promise<Movie[]>`.
- Import the `toPromise` rxjs operator by adding the import statement `import 'rxjs/add/operator/toPromise'`.
- Call the `toPromise` operator/function on the `observe` variable, and assign the result to a new variable `promise`.
> Lastly, we need to extract the json data from the response object, asynchronously:
- Call the `then` function on the `promise` variable and supply an arrow function as parameter.
 > The arrow function itself has one parameter `response`. The arrow function will be called asynchronously when the data has been fetched.
 - Call the `json` function on the `response` parameter and return its result: `(response) => response.json()`.
- The `then` function we just called will return *another* `promise` object. Store this object in another variable `result` and make the `getMovies` function return this variable.
- Finally, the movies component needs to handle the result of the call to `getMovies` asynchronously. The `getMovies` function now returns a `Promise` object, so we call the `then` function on it again. Do this in the `ngOnInit` of the movies component. The `then` function will need an arrow function as parameter. The arrow function will have one parameter itself `result` (the array of movies retreived from the server). Set the value of the private `movies` property to the value of `result`.
- *Repeat the steps for the favorite movies in a `getFavMovies` function. The `getFavMovies` function will not be used in any component yet.*

**Extra**
> Refactor the code in the `getMovies` function to chaining all the function calls and let `getMovies` return the result of the chain: `get -> toPromise -> then`.

> We should also add an error handler to catch any errors that may come from the server:
- Add a private function `handleError` with one parameter `error: any` to the movie service.
 - Call the static `reject` function on the `Promise` object with the `error` object as parameter. Store the result in a local `result` variable. Let the `handleError` function return the `result` variable.
- Add a call to the `catch` function to the chain in `getMovies` and supply `this.handleError` as parameter.

**Result**:
> We now asynchronously retrieve the movies from a remote/stub server.