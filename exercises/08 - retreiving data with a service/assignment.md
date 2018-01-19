Assignment 8: Getting movies from a remote server
==============================================

> ## Use the angular http service to get movies from a remote/stub server

> We already set up the 'angular in memory web api' for you to stub a remote server and return mock data. See `stub-server.md` for info on how to set it up.

**Links**:
- [angular http client](https://angular.io/guide/http)
- [rxjs operators](https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35)
- [rxjs](http://reactivex.io/rxjs/manual/overview.html#introduction)
- [rxjs observable](http://reactivex.io/documentation/observable.html)
- [using observables](https://angular-2-training-book.rangle.io/handout/observables/using_observables.html)
- [typescript generics](https://www.typescriptlang.org/docs/handbook/generics.html)

**Steps**:
- Import the `HttpClientModule` from `'@angular/common/http'` into the `app.module` file and add it to the `imports` array of the module.
- Import the `HttpClient` service from `'@angular/common/http'` into the `movie.service`.
- Add a parameter `http` to the constructor and type it as `HttpClient`.
- Declare two private constant properties `moviesUrl` and `moviesFavUrl` in the `movie.service` and assign the values `'api/movies'` and `'api/moviesFav'` to them.
>  We will edit the `getMovies` function to use the `httpClient` to asynchronously get the remote movie data:
- Remove the hardcoded array of movies from the `getMovies` function.
- In the `getMovies` function, call the `get` function on the `http` service and supply the `moviesUrl` as single parameter. The `get` function will return a result. Assign this result to a new variable `result`.
> The `HttpClient` service fetches data from a server over http and returns an `Observable` object from the `rxjs` library.
An `Observable` listens to a 'stream' of events over time. It listens for example to every key stroke on a keyboard or to every signal/response a server pushes to the app.
- Change the return type of the `getMovies` function to `Observable<Movie[]>`. You'll also need to import the `Observable` type from `'rxjs/Observable'` to fix the error you get.
- Finally, let the function `getMovies` return the `result` variable.
> When you hover over the `result` variable, you'll see the result type of the get function. Because TypeScript cannot know what kind of data the server will return, you'll see it returns an `Observable<Object>`.
> To tell TypeScript what type of data will be returned by the server, we can add a `type parameter` to the get function:
- Add the type parameter `Movie[]` to where you call the `get` function like so: `.get<Movie[]>(...etc`
> Now if you hover the result object again, it will be of type `Observable<Movie[]>`.
> At this point, our `movies.component` needs to asynchronously handle the returned result of `movieService.getMovies`.
> In the `movies.component` we made a call to `movieService.getMovies` to fetch the movies. This will probably give an error at this point:
- In the `movies.component` `ngOnInit` function you made a call to `movieService.getMovies`. Instead of directly storing the result you get to the `movies` property, save it to a local variable `result` in the `ngOnInit` function.
> When you hover the `result` variable, you'll see the type `Observable<Movie[]>`. Now that the `movieService.getMovies` returns an `Observable`, we need to `subscribe` to it:
- Subscribe to the observable by calling the `subscribe` function on the `result` variable. The subscribe function needs one parameter that is a (arrow) function. This function will have one parameter which you can name `movies`: `(movies) => { }`.
- The function we supplied as parameter will be called when the server returns with our data. So we can use this function to store the data to the property `this.movies` again.
- *Repeat the steps for the favorite movies in a `getFavMovies` function. The `getFavMovies` function will not be used in any component yet.*

**Extra**

> We should also add an error handler to catch any errors that may come from the server:
> The `rxjs` library and `Observable` works with `operators` you can directly import. When you import them, they will be added as operator the Observable object.
- To handle an error, import the catch operator in the `movie.service` like so `import 'rxjs/add/operator/catch'`;
- The `catch` operator will now be available. Add it to our http call by 'chaining' it to the `get` function.
- The `catch` function will also need an arrow function as parameter and will itself receive one parameter named `error`.
- When catching errors in a service, we usually do some logging (i.e. console.log(error)). 
- After logging we `throw` our error to our calling component. You'll need to import throw operator also.
- When imported, you can staticly call it on the `Observable` object and supply the error or a string as parameter.
- To test it, change the `movieUrl` to something else and use the console in the browser to see what happens.

**Result**:
> We now asynchronously retrieve the movies from a remote/stub server.