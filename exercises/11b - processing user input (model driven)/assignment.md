Assignment 11: Validating user input with a model driven form
==============================================

> ## Extend the movie detail form with model driven validation and validation messages

**Links**:
- [model driven forms handout](https://angular-2-training-book.rangle.io/handout/forms/reactive-forms/reactive-forms.html)
- [model driven forms fundamentals](https://toddmotto.com/angular-2-forms-reactive#ngmodule-and-reactive-forms)
- [formcontrol api](https://angular.io/docs/ts/latest/api/forms/index/FormControl-class.html)
- [formgroup api](https://angular.io/docs/ts/latest/api/forms/index/FormGroup-class.html)
- [template reference variable](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#ref-vars)
- &#185; [formbuilder api](https://angular.io/docs/ts/latest/api/forms/index/FormBuilder-class.html)
- *[pipes](https://angular.io/docs/ts/latest/guide/pipes.html)*

**Steps**:
> Name and genre are required fields and name should have at least 4 characters.
> Validators can be set by adding them as a second (array) parameter to the `FormControl` objects.
- Import the standard angular `Validators` from `@angular/forms`.
- Add a second parameter to the genre `FormControl`: an Array with `Validators.required` validator function as array item.
- Do the same for the name `FormControl`, but also add a second validator `Validators.minLength(4)`, which will return a validator function.
> Angular will add failed validation rules to the `FormControl` object as an `errors` property.
- Create a new `<span>` element beneath the `name` input field and display an error text in the `<span>`.
 - Add an `*ngIf` directive to the `<span>` and use the 'errors' property to check if the 'required' rule is present: `movieForm.controls.name.errors?.required`.
 - Extend the `*ngIf` condition with `&& movieForm.controls.name.touched` to make sure the error only appears when the user has 'touched' it.
- Do the same for the genre control and for the `minlength` error of the name control.
> You can now see the errors in the browser when you delete the characters from the name or genre input.

> Creating `FormGroup`s and `FormControl`s can be simplified by using the angular `FormBuilder` service.
- Import the `FormBuilder` from `@angular/forms`, inject it into the constructor and store it as a class property.
- &#185; Rewrite the `FormGroup` and `FormControls` using the `FormBuilder` in `ngOnInit` function.

> Now before submitting to the server, we need to check if the form is valid.
- Use the `movieForm` in the `onSubmit` function to check if the form is valid (`movieForm.valid`) before using it's value.
> Out of the box Angular 2 supplies the required, minlength, maxlength and pattern Validators.
> To validate the min (1) and max (10) for the rating input we need to create a custom Validator. We will do this in another assignment.

TODO: !!!! movie Wordt niet automatisch geupdate wanneer er een andere item in de list wordt geselecteerd, gebruik ngonchanges!!!

**Extra**:
- If the form is not valid, we don't want the user to be able to click the save button.
- Use the json pipe to print the value and errors object on the screen. This can be handy when debugging.

**Result**:
> We now have a model driven form that validates its input changes and displays error messages
