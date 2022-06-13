Assignment 3: showing movie details 
==============================================

> ## Add a detail view to the app component that shows the details of the movie selected in the list 

**Links**:
- [templates and views](https://angular.io/guide/architecture-components#templates-and-views)
- [angular ngIf directive](https://angular-training-guide.rangle.io/directives/structural_directives/ng_if_directive)

**Steps**:
- Add a (public) property `selectedMovie` of type `Movie` to the app component class.
- Add a function `onMovieClicked` to the app component class.
    - The function accepts a movie as parameter.
    - Assign the movie parameter to the `selectedMovie` property in this function.
- Create a movie detail view in the app components html template:
    - Add a `div` element.
    - Insert a header element `h2` into the `div` and display the name of the `selectedMovie` object as headertext.
    - Insert a `div` element beneath the header element for each remaining property of `selectedMovie` and display the value of that property in it.
- Insert a `button` element into the movie list `li` element with the text 'view..'.
- Add an event binding to the button `click` event, bind it to the `onMovieClicked` function and supply the clicked movie as parameter.
- Add an `ngIf` directive to the details `div` to conditionally hide the details when no movie has been selected yet.

**Result**:
> The view will now show the details of the movie that has been 'clicked' in the list of movies.