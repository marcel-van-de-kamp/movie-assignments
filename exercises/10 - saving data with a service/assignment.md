Assignment 10: saving data with a service
==============================================

> ## Use the angular http service to save the movie details input to a remote/stub server

> The stub server we set up is also able to 'save' data by means of a http put (edit) or post (create) call.

**Links**:
- [angular http client](https://angular.io/guide/http)
- [rxjs](http://reactivex.io/rxjs/manual/overview.html#introduction)
- [rxjs observable](http://reactivex.io/documentation/observable.html)
- [using observables](https://angular-2-training-book.rangle.io/handout/observables/using_observables.html)
- [typescript generics](https://www.typescriptlang.org/docs/handbook/generics.html)
- [template literals](https://developers.google.com/web/updates/2015/01/ES6-Template-Strings)

**Steps**:
- Add an `updateMovie` function to the `movie.service`, that receives one parameter `movie`.
- Create a local variable `url` in `updateMovie`, that combines the `moviesUrl` with a `/` and then `movie.id`. So if `id` is `1`, the end result will be `api/movies/1`.
> We have to tell the 'api' what type of payload we are sending. We do this by sending an httpheader that says our payload is json:
- Create an `options` variable with value : `{ headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }`
- call the `put` function on the `http` service, supply the `url` as first parameter, then the `movie` and lastly the `options`.
- Let the `updateMovie` return the `Observable` result from the call to `put`.

> Now we want the data to be stored when we press a save button:
- Add a button element to the template of the `movie-details.component`, beneath the input fields. The button has the text `Save..` and a binding to it's `click` event. The `click` event is bound to a function `onSaveClicked`.
- Add the `onSaveClicked` function to the movie detail component.
> We want the `movie-detail.component` to remain stateless, i.e. not know anything about retreiving or saving data to a server, so we will let our parent handle the actual saving:
- Import the `Output` and `EventEmitter` from `@angular/core` in the `movie-detail.component`, create an `@Output()` property `save` and set its value to a new `EventEmitter`.
- Call the `emit` function on `save` in the `onSaveClicked` method with the property `movie` as single argument.
- Add an event binding to our `save` event in the template of the `movies.component` and bind it to a `onMovieSaved` function. don't forget the `$event` parameter.
 - Add the `onSaveMovie` function to the movies component. Make the `onMovieSaved` function call `updateMovie` of the `movie.service`.
 - `updateMovie` will return an `Observable`, so chain a call to the `subscribe` function and supply an arrow function as its single parameter.
 > Now that the data is saved, we want the list to update as well.
 - Extract the code from the `ngOnInit` function to a new function `getMovies` in the movies component.
 - Call `getMovies` in the `ngOnInit` to make it work again. 
 > Now we can re-use the code we extracted (you should not manually call the `ngOnInit` function because it is a lifecycle hook). 
- Now also call `getMovies` inside the arrow function we supplied to the `subscribe` function.
 > 'In real life' after editing a movie, we would often return to an overview page and retreive the updated list data there.


**Extra**
> We are now directly passing the result from the server the component. We don't want this, because a component should not know anything about communicating with a server. We want to pick up the response from the server in our `movie.service`, mabe do something with it and then pass a custom result to the component.
- Chain a `map` function (with `.pipe()`) to the `put` in `movie.service` to intercept the response of the server and do something with it.
> The server can return nothing (or sometimes the movie itself), or a response `204 No Content`, which means all is well but i don't have a payload for you.
- We don't want to send an empty response back to the `movies.component`, so we will just return the `movie` object in the arrow function. This will automattically be wrapped in a new `Observable`.
> Note: this does mean we must be able to rely on the server that the movie is stored exactly as we send it.
- To make it complete, also add the `catchError` to the chain (pipeline) just like in `getMovies`.

**Result**:
> We now asynchronously save the data of an editted movie to a remote/stub server, and update the list after the data is saved.