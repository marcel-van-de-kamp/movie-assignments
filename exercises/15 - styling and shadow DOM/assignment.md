Assignment 15: Using view encapsulation and shadow DOM
==============================================

> ### Use the routerLinkActive directive to highlight the active menu item. Use the native shadow DOM to encapsulate the view.  
> ### Use the same CSS class to highlight a selected movie in a different color.

**Links**:
- [shadow dom 101](https://www.html5rocks.com/en/tutorials/webcomponents/shadowdom/)
- [shadow dom support](http://caniuse.com/#search=shadow%20dom)
- [angular 2 view encapsulation](http://blog.thoughtram.io/angular/2015/06/29/shadow-dom-strategies-in-angular2.html)
- [routerlinkactive directive](https://angular.io/docs/ts/latest/api/router/index/RouterLinkActive-directive.html)
- [¹ngclass directive](https://angular.io/docs/ts/latest/api/common/index/NgClass-directive.html)

**Steps**:
- Add a CSS class `.active` to the navigation component style sheet `navigation.component.scss`.
  - Change the text color in the class and add an underline text decoration.
- Add the `routerLinkActive` directive to both navigation links in the navigation component template and set its value to the `active` class.
> Open up the developer tools in chrome and inspect the navigation links to see what angular has done with the class.
- Import the enum `ViewEncapsulation` from the angular core into the navigation component.
- Set the encapsulation property of the component decorator to `ViewEncapsulation.Native` (default is emulated).
> Now inspect the navigation links in chrome again. All the `_ngcontent-` attributes are replaced by a `#shadow-root`.
> Angular will default to an emulated shadow DOM and encapsulate the view, so it will still work if we don't use the native encapsulation.
- Also add a class `.active` to the movie list component style sheet `movie-list.component.scss`.
- ¹Add an `ngClass` directive to the list item in the movie list template and use an object expression to set the `active` class when `clickedMovie` equals the current `movie` in the loop.
  - Change the text color in the class to a color, different from the navigation links.
- Add a public property `clickedMovie` to the list component and set it in the `onMovieClicked` function.
> if you would set the encapsulation property of both components to `ViewEncapsulation.None` the active classes will overwrite eachother, unless you specify a deeper css selector for one or both.

**Result**:
> Our navigation links and selected movie now light up when they are active with the same class, and are encapsulated in their own shadow root