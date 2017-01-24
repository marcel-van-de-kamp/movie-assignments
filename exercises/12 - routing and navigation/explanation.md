Routing in Angular
===========================================================

> The browser is a familiar model of application navigation.
> We enter a URL in the address bar and the browser navigates to a corresponding page.  
> We click links on the page and the browser navigates to a new page.  
> We click the browser's back and forward buttons and the browser navigates backward and forward through the history of pages we've seen.

> The Angular Router ("the router") borrows from this model. It can interpret a browser URL as an instruction to navigate to a client-generated view. It can pass optional parameters along to the supporting view component that help it decide what specific content to present. You can bind the router > to links on a page and it will navigate to the appropriate application view when the user clicks a link. You can navigate imperatively when the user clicks a button, selects from a drop box, or in response to some other stimulus from any source. And the router logs activity in the browser's history journal so the back and forward buttons work as well.


**Base href**:
> The router uses the browser's history.pushState for navigation. Thanks to pushState, you can make in-app URL paths look the way you want them to look, e.g. http://localhost:4200/movies. The in-app URLs can be indistinguishable from server URLs.
> Modern HTML 5 browsers were the first to support pushState which is why many people refer to these URLs as "HTML 5 style" URLs.
> You must add a `<base href />` element tag to the `index.html` to make pushState routing work. The browser also needs the base href value to prefix relative URLs when downloading and linking to css files, scripts, and images.

**Links**:
- - [Why Routing](https://angular-2-training-book.rangle.io/handout/routing/why_routing.html)


