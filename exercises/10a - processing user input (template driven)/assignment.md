Assignment 10: Processing user input with a template driven form
==============================================

> ## Extend the movie detail component with a template driven form to capture and submit user input

**Links**:
- [angular forms](https://angular.io/docs/ts/latest/guide/forms.html)
- [template model binding](https://angular-2-training-book.rangle.io/handout/forms/template-driven/template-model-binding.html)
- [template driven forms handout](https://angular-2-training-book.rangle.io/handout/forms/template-driven/template-driven_forms.html)
- [template driven forms fundamentals](https://toddmotto.com/angular-2-forms-template-driven)
- [template reference variable](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#ref-vars)
- *[pipes](https://angular.io/docs/ts/latest/guide/pipes.html)*

**Steps**:
- When using template driven forms and/or the `NgModule` directive, we need to import the `FormsModule` located in `@angular/forms`.
- encapsulate the input fields with a `<form novalidate>` element.
> Angular will slap an error in your face (actually in the console), see if you can fix it.
- Add a `name` attribute to al input fields and set a value to it.
- Add a *template reference variable* `movieForm` to the `form` element and assign the `ngForm` object to it.
> Your now able to access the form object that angular creates in the template via the `movieForm` variable.
> Check it out and output its value in the template by using the `json` filter/pipe `{{ movieForm.value | json }}`.

> We now have two seperate states to keep track of inside the detail component, but we should let `NgForm` do all the work for us,
> besides that we only want the details to be updated once we press a save button:
- Remove the event bindings from the `ngModel` directives so only the changes to the model are reflected to the view.
- Add a save button with type `submit` to the bottom of the form.
- Add a function `onSubmit` to the movie detail component with one parameter `value` of type `any`.
> If you used the same names in the `name` attributes as the property names of a movie, you could also type the `value` parameter as a `Movie`.
- Map the properties on the `value` parameter to our `movie` model object. You could use `Object.assign` if `value` actually is a `Movie`.
- Bind de `ngSubmit` event that is emitted by the `ngForm` directive on the `<form>` element to the `onSubmit` function and supply the value of the form as parameter: `onSubmit(movieForm.value)`.
> Our model still changes directly when we press the *Escape* key in the `genre` input field.
- Create a template reference variable `#genre` on the genre input element and assign the `ngModel` object to it.
- Remove the `onClearGenre` function from the component and use the template reference variable to clear the genre *Escape* key: `genre.control.setValue('')`.
> By only one way binding the form model, the form also can be easily reset because we still have the original data in the `movie` input property.

**Result**:
> We now use a ngForm to capture input changes without directly modifying the model, and we are writing the data to the model on submit.
> Next we want to validate the input changes and show validation messages.