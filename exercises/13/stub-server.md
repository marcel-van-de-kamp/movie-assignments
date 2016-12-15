Assignment 13 Appendix: Configure the angular in memory web api 
==============================================


**Links**:
- [simulating the web api](https://angular.io/docs/ts/latest/tutorial/toh-pt6.html#!#simulating-the-web-api)

**Steps**:
- Install the package by executing the command `npm install angular-in-memory-web-api --save-dev`;
- Create a new file `in-memory-data.service.ts` on the same level as the app module;
- Import the interface `InMemoryDbService` from `'angular-in-memory-web-api'` and create a class that implements it;
- Let the function `createDb` return an object with the `movies` array and `moviesFav` array as properties;
- Import the `HttpModule` from `'@angular/http'` into the app module and add it to the `imports` array;
- Import the `InMemoryWebApiModule` from `'angular-in-memory-web-api'` and the `InMemoryDataService` into the app module;
- Configure the web api by calling the `forRoot` function on the `InMemoryWebApiModule` and supplying the `InMemoryDataService` as parameter. 
  - Add the result to the import array beneath the `HttpModule`;

**Result**:
> The in memory web api will now intercept all calls done with the http service and handle them with mock data.