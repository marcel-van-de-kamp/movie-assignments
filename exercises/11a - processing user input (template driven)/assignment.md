Assignment 11: Validating user input with a template driven form
==============================================

> ## Extend the movie detail form with template driven validation and validation messages

**Links**:
- [angular forms](https://angular.io/docs/ts/latest/guide/forms.html)
- [forms with validation](https://angular.io/docs/ts/latest/cookbook/form-validation.html)
- [template model binding](https://angular-2-training-book.rangle.io/handout/forms/template-driven/template-model-binding.html)
- [template driven forms handout](https://angular-2-training-book.rangle.io/handout/forms/template-driven/template-driven_forms.html)
- [template driven forms fundamentals](https://toddmotto.com/angular-2-forms-template-driven)
- [template reference variable](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#ref-vars)

**Steps**:
> Name and genre are required fields and name should have at least 4 characters.
- Add a `required' html attribute to the 'name' input element to mark is as required.
- Add a template reference variable `#movieName` to the `name` input and assign its `ngModel` to it.
> Angular will add failed validation rules to the ngModel of an input field as an `errors` property.
- Create a new `<span>` element beneath the `name` input field and display an error text in the `<span>`.
 - Add an `*ngIf` directive to the `<span>` and use the 'errors' property on `movieName` to check if the 'required' rule is present: `movieName.errors?.required`.
 - Extend the `*ngIf` condition with `&& movieName.touched === true` to make sure the error only appears when the user has 'touched' it.
> You can now see the error in the browser when the name input field is empty.
- Repeat the steps for the genre field.
- Also add a `minlength="4"` html attribute to the `name` input field and add a validation error for it.
> Now before submitting to the server, we need to check if the form is valid.
- Pass the valid state/property of the 'movieForm` as second parameter to the `onSubmit` function.
- Edit the onSubmit function in the detail component so that it checks if the form is valid before using the value, else show an error message (`alert('error')`).
> Out of the box Angular 2 supplies the required, minlength, maxlength and pattern Validators.
> To validate the min (1) and max (10) for the rating input we need to create a custom Validator. We will do this in an extra assignment.

**Result**:
> We now have a template driven form that validates its input changes and displays error messages.
