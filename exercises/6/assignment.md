Assignment 6: Retreiving data with a service
==============================================

## Create a service that returns/fetches the movie data instead of hardcoding it in the component

- Create a new service in the `movies` folder using the angular-cli command `ng g service movies/movie`;
  - Angular-cli will throw a warning that you must provide the service in order to use it;
  - Provide the new movie service in the `providers` array of our root module `app.module`;
- In our new movie service create a public function `getMovies` which will return the `movies` array as previously defined in our `app.component`;
- In our app component import `OnInit` and implement the interface `OnInit` on the class `AppComponent`;
- Because of the new interface `OnInit` we must implement the `ngOnInit` method
- In the constructor inject the `MovieService` as a private variable `movieService`;
- Within this method retrieve the movies from `movieService` and assign it to our `movies` variable
- Needless to say, remove the hardcoded movies array from the app component. This array is now fetched with the service.

The movies will now be retreived from a reusable singleton service. The service is responsible of returning the requested movies.
How the service does that is not important to the components that use it.


**Links**:
- [Components & Services](https://angular-2-training-book.rangle.io/handout/migrate/ng-metadata/components-and-services.html)
- [Services tutorial](https://angular.io/docs/ts/latest/tutorial/toh-pt4.html)