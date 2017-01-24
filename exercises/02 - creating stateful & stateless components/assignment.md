Assignment 2: Creating a movie object
==============================================

> ## Create a typed model definition for a movie and use it in the app component

**Links**:
- [typescript classes](http://www.typescriptlang.org/docs/handbook/classes.html)
- [typescript modules](https://www.typescriptlang.org/docs/handbook/modules.html)

**Steps**:
- Create a new folder in the app folder `movies`.
- Create a new file in the folder `movie.ts`.
- Define a class `Movie` that accepts the parameters id, name, genre, rating.
  - Declare the correct typing for each parameter and make them publicly available as properties of the `Movie` class.
- Export the class to make it available as a module.
- Import `Movie` in the app component.
- Change the typing of the movie array to an array of `Movie` instead of `any`.
- Fix any errors that might occur in the app component.

**Result**:
> We now have a reusable class that functions as a 'model' for a new or existing Movie, a Movie model object.