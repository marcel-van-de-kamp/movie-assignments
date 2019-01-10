Assignment 9: Processing user input
==============================================

> ## Extend the movie detail component so you can edit the properties of a movie and reflect it back to the model

**Links**:
- [two way binding](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#two-way)
- [two way binding with ngmodel directive](https://angular.io/guide/template-syntax#two-way-binding---)
- [ngmodel api](https://angular.io/docs/ts/latest/api/forms/index/NgModel-directive.html)
- [user input events](https://angular.io/docs/ts/latest/guide/user-input.html)
- [cloning with object.assign](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- ***[native key event binding](https://www.bennadel.com/blog/3088-native-key-combination-event-binding-support-in-angular-2-beta-17.htm)***

**Steps**:
- Add two input fields of type `text` (name and genre) to the movie-detail component template and one of type `number` (rating), inside the root `div` element.
> The `ngModel` directive is exported from the `FormModule` and can be used as syntactic sugar for 'two way binding' with input elements.
- The `NgModel` directive is exported from the `FormsModule` located in `@angular/forms`. Add this module to the `imports` array of the movies module.
- Use the `ngModel` directive to two way bind the inputs to the name, genre and rating properties of the movie object.
> Test it in the browser and see what happens. 
- *testing testing.. wtf..?*
> Oops, we don't want the changes to directly be reflected in the movie list as well, so we need to decouple its model.
- In the movies component, use the `Object.assign` to clone the movie ($event) parameter. Set the `selectedMovie` property to the cloned object.

**Extra**:
- As an **extra** functionality, we want to clear the `genre` input when the user presses the escape button

**Result**:
> We are now able to reflect the user input to the model and vice versa via two way binding and the ngModel directive
