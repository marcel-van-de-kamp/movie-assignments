Assignment 1: Displaying a list of movies
==============================================

> ## Use the app component to define an array of movie objects and display it as a list in the browser.

**Links:**
- [html lists](http://www.w3schools.com/html/html_lists.asp)
- [typescript basic types](https://www.typescriptlang.org/docs/handbook/basic-types.html)
- [angular displaying data](https://angular.io/docs/ts/latest/guide/displaying-data.html)
- [angular ngFor directive](https://angular-2-training-book.rangle.io/handout/directives/ng_for_directive.html)
- [structural directives](https://angular-2-training-book.rangle.io/handout/directives/structural_directives.html)

**Steps**:
- Declare a public property `movies` in the app component and give it the typing array of any `any[]`.
- Initialize the movies array in the constructor as an array of movie objects.
  - Fill the array with a couple of good movies.
  - A movie object has the following properties: id, name, genre, rating.
- Create an unordered list `<ul>` in the template of the app component.
- Create one list item in the list `<li>` and use an `*ngFor` to loop over the movies.
  - Display the name and rating for each movie using interpolation.

**Result**:
> We now have a component that displays a list of movies.