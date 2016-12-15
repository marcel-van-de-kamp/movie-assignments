Assignment 12: Adding navigation
==============================================

> ## Add navigation links for the movies and dashboard routes in the app module template

**Links**:
- [Routing links](https://angular-2-training-book.rangle.io/handout/routing/routerlink.html)
- [RouterLink directive](https://angular.io/docs/ts/latest/api/router/index/RouterLink-directive.html)

**Steps**:
- Add a `<nav>` element to the app component template;
- Add an unordered list to the template `<ul>` with two list items `<li>`;
- Insert an anchor element `<a>` to the first `<li>` with the text `Movies`;
 - Add a `routerLink` directive to the anchor element and set its value to `/movies` ;
- Repeat the above step for `/dashboard`;

**Result**:
> We now have simple navigation which we can use to navigate between the dashboard an movies