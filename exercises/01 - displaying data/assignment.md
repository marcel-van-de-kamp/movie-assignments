Assignment 1: Displaying a list of movies
==============================================

> ## Use the app component to define an array of movie objects and display it as a list in the browser.

**Links:**
- [html lists](http://www.w3schools.com/html/html_lists.asp)
- [typescript basic types](https://www.typescriptlang.org/docs/handbook/basic-types.html)
- [Introduction Angular Concepts](https://angular.io/guide/architecture)
- [templates and views](https://angular.io/guide/architecture-components#templates-and-views)
- [angular ngFor directive](https://angular-training-guide.rangle.io/directives/structural_directives/ng_for_directive)
- [structural directives](https://angular-training-guide.rangle.io/directives/structural_directives)
- [Import the NgFor directive](https://angular.io/tutorial/tour-of-heroes/toh-pt2#list-heroes-with-ngfor)

**Steps**:
- Declare a (public) property `movies` in the app component and give it the typing array of any `any[]`.
- Initialize the movies array in the constructor as an array of movie objects.
  - Fill the array with a couple of good movies.
  - A movie object has the following properties: id, name, genre, rating.
- Create an unordered list `<ul>` in the template of the app component.
- Create one list item in the list `<li>` and use an `*ngFor` to loop over the movies.
  - Display the name and rating for each movie using interpolation.
  - Don't forget to import the `NgFor` directive in the imports array to display the list (`imports: [NgFor],`)

**Result**:
> We now have a component that displays a list of movies.