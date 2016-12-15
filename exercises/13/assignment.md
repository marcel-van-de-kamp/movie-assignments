Assignment 13: Getting movies from a remote server
==============================================

> ## Use the angular http service to get movies from a remote/stub server

> We already set up the 'angular in memory web api' for you to stub a remote server and return mock data. See `stub-server.md` for info on how to set it up.

**Links**:
- [http module](https://angular-2-training-book.rangle.io/handout/http/)
- [http request](https://angular-2-training-book.rangle.io/handout/http/making_requests.html)
- [convert to promise](https://angular-2-training-book.rangle.io/handout/http/requests_as_promises.html)
- [angular http client](https://angular.io/docs/ts/latest/guide/server-communication.html)
- [rxjs](http://reactivex.io/intro.html)
- [rxjs observable](http://reactivex.io/documentation/observable.html)
- [using observables](https://angular-2-training-book.rangle.io/handout/observables/using_observables.html)
- [promises](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [typescript generics](https://www.typescriptlang.org/docs/handbook/generics.html)

**Steps**:
- Import the `HttpModule` from `'@angular/http'` into the app module and add it to the `imports` array;
- Import the `Http` service into the movie service and inject it into the constructor (make sure the `@injectable()` decorator is present);
- Declare two private constant properties `moviesUrl` and `moviesFavUrl` and assign the values `'api/movies'` and `'api/moviesFav'` respectively;
>  We will edit the `getMovies` function to use the `httpService` to asynchronously get the remote movie data:
- Remove the hardcoded array of movies from the `getMovies` function;
- Call the `get` function on the `httpService` with the `moviesUrl`, assign the result to a new local variable `observe`;
> As an intermediate step, we will convert the `observe` of type `Observable<Response>` to a more familiar `Promise` object:
- Change the return type of the `getMovies` function to `Promise<Movie[]>`;
- Import the `toPromise` rxjs operator by adding `import 'rxjs/add/operator/toPromise'`;
- Call the `toPromise` operator/function on the `observe` variable, and assign the result to a new variable `promise`;
> Lastly, we need to extract the json data from the http response object an return it:
- Call the `then` function on the `promise` variable and supply an arrow function as asynchronous callback with one parameter `response`;
- Call the `json` function on the parameter and return the `data` property of the json: `response => response.json().data`;
- Let the `getMovies` function return the synchronous result of the `then` function;
- Refactor the code to chain all the above function calls and let `getMovies` return the result of the chain: `get -> toPromise -> then`;
> We should also add an error handler to catch any errors that may come from the server:
- Add the `catch` function to the chain and supply an arrow function that accepts one `error` parameter;
  - Just return the error for demo purposes;
- Refactor the movies and dashboard component to handle the promises that are returned;
- *Repeat the steps for the `getFavMovies` function*

**Result**:
> We now asynchronously retrieve the movies from a remote/stub server.