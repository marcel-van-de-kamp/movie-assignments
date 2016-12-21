Assignment 3: showing movie details 
==============================================

> ## Add a detail view to the app component that shows the details of the movie selected in the list 

**Links**:
- [angular displaying data](https://angular.io/docs/ts/latest/guide/displaying-data.html)
- [angular directives](https://angular-2-training-book.rangle.io/handout/directives/)
- [angular ngIf directive](https://angular-2-training-book.rangle.io/handout/directives/ng_if_directive.html)

**Steps**:
- Add a public property to the app component class `selectedMovie` of the type `Movie`;
- Add a function to the app component class `onMovieClicked`; 
    - The function accepts a movie as parameter;
    - The function sets the `selectedMovie` property to the value of the parameter;
- Create a movie detail view in the app components html template:
    - Add a `div` element;
    - Insert a header element `h2` into the `div` and display the name of the `selectedMovie` object as headertext;
    - Insert a `div` element beneath the header element for each remaining property of `selectedMovie` and display the value of that property in it;
- Insert a `button` element into the movie list `li` element with the text 'view..';
- Add an event binding to the button `click` event, bind it to the `onMovieClicked` function and supply the clicked movie as parameter;
- Add an `ngIf` directive to the details `div` to conditionally hide the details when no movie has been selected yet (`selectedMovie`);

**Result**:
> The view will now show the details of the movie that has been 'clicked' in the list of movies.