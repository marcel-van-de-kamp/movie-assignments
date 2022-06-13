Assignment 8: Getting movies from a remote server
==============================================

> ## Use the angular http service to get movies from a remote/stub server

> We already set up the 'angular in memory web api' for you to stub a remote server and return mock data. See `stub-server.md` for info on how we did it (don't do it now).

**Links**:
- [angular http client](https://angular.io/guide/http)
- [rxjs operators](https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35)
- [rxjs](http://reactivex.io/rxjs/manual/overview.html#introduction)
- [rxjs observable](http://reactivex.io/documentation/observable.html)
- [typescript generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [subscribing to observables](https://angular.io/guide/observables#subscribing)
- [async pipe](https://angular.io/api/common/AsyncPipe)

**Steps**:
- Notice the `HttpClientModule` from `'@angular/common/http'` in the `app.module` file and that it is part of the `imports` array of the module.
- Import the `HttpClient` service from `'@angular/common/http'` into the `movie.service`.
- Add a parameter `http` to the constructor and type it as `HttpClient`.
- Declare two private properties `moviesUrl` and `moviesFavUrl` in the `movie.service` and assign the values `'api/movies'` and `'api/moviesFav'` to them.
>  We will edit the `getMovies` function to use the `httpClient` to asynchronously get the remote movie data:
- Remove the hardcoded array of movies from the `getMovies` function.
- In the `getMovies` function, call the `get` function on the `http` service and supply the `moviesUrl` as single parameter. The `get` function will return a result. Assign this result to a new variable `result`.
> The `HttpClient` service fetches data from a server over http and returns an `Observable` object from the `rxjs` library.
An `Observable` listens to a 'stream' of events over time. It listens for example to every key stroke on a keyboard or to every signal/response a server pushes to the app. An Observable will only do something when someone is Subscribing to it. An Observable will do nothing by itself.
- Change the return type of the `getMovies` function to `Observable<Movie[]>`. You'll also need to import the `Observable` type from `'rxjs'` if you didn't do so already.
- Finally, let the function `getMovies` return the `result` variable.
> When you hover over the `result` variable, you'll see the result type of the get function. Because TypeScript cannot know what kind of data the server will return, you'll see it returns an `Observable<Object>`.
> To tell TypeScript what type of data will be returned by the server, we can add a `type parameter` to the get function:
- Add the type parameter `Movie[]` to where you call the `get` function like so: `.get<Movie[]>(...etc`
> Now if you hover the result object again, it will be of type `Observable<Movie[]>`.
> At this point, our `movies.component` needs to asynchronously handle the returned result of `movieService.getMovies`.
> In the `movies.component` we made a call to `movieService.getMovies` to fetch the movies. This will probably give an error at this point:
- In the `movies.component` `ngOnInit` function you made a call to `movieService.getMovies`. Instead of directly storing the result you get to the `movies` property, save it to a local variable `result` in the `ngOnInit` function.
> When you hover the `result` variable, you'll see the type `Observable<Movie[]>`. Now that the `movieService.getMovies` returns an `Observable`, we need to `subscribe` to it:
- Subscribe to the observable by calling the `subscribe` function on the `result` variable. The subscribe function needs an Object with at least the so called `next` handler. This next handler will run when a new value has been received. So this subscribe method can look like:
```
result.subscribe({
    next: (movies: Movie[]) =>  {
        // do something with the received movies 
    },
    error: (err: Error) => { 
        // do something with an error....
    },
    complete: () => { 
        // do something when the observer completes, often not needed.... 
    }
});
```
- The next handler will be called when the server returns with our data. So we can use this function to store the data to the property `this.movies` again.
- *Repeat the steps for the favorite movies in a `getFavMovies` function. The `getFavMovies` function will not be used in any component yet.*

**Extra 1**
> Try to display the movies with the help of the `async` pipe. See: [async pipe](https://angular.io/api/common/AsyncPipe). This `async` pipe can be applied to a `Promise` or an `Observable` directly in the template (html). This pipe will do an implicit subscribe to the observable so you will not have to do it manually/explicit in the ts file like we just did.

> Another advantage of the `async` pipe is that the observable will be automatically be unsubscribed when the template has been destroyed. NB: subscriptions to observables returned from the HttpClient will also be automatically unsubcribed but with all other types of observables you will need to know when to unsubscribe. With the `async` you are always safe, so it's a good practice.

**Extra 2**

> We should also add an error handler to catch any errors that may come from the server:
> We should catch and handle the error in the service and not in the component
- Follow the steps as described at [http error handling](https://angular.io/guide/http#error-handling)
- Eventually you'll need to import several 'rxjs operators' like
    - `import { catchError, retry } from 'rxjs/operators';`
- You'll also need to import the 'throwError' function from 'rxjs':
    - `import {throwError } from 'rxjs';`
- To test it, change the `movieUrl` to something else and use the console in the browser to see what happens. You could also make a public property `error` in the movies component and display/interpolate it when there is an error.

**Result**:
> We now asynchronously retrieve the movies from a remote/stub server.