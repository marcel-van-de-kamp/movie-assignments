Assignment 11b: Processing user input with a model driven form
==============================================

> ## Create a new movie detail component with a model driven form to capture and submit user input 

**Links**:
- [reactive forms](https://angular.io/guide/reactive-forms)
- [model driven forms handout](https://angular-training-guide.rangle.io/forms/reactive-forms)
- [formcontrol api](https://angular.io/docs/ts/latest/api/forms/index/FormControl-class.html)
- [formgroup api](https://angular.io/docs/ts/latest/api/forms/index/FormGroup-class.html)

**Steps**:
- When using model driven forms, the `ReactiveFormsModule` has to be imported into the movies module from `@angular/forms` and added to the imports array.
- Encapsulate the input fields and button in the template of the movie detail component with a `<form novalidate>` element.
- Add a `name` attribute to all input fields and set a value to it, for example `name="genre"`.
- Remove all `ngModel` directives from the template, we don't need 'automagic' template binding in model driven forms.
- To build a model driven form we need the `FormGroup` and `FormControl` classes, import these in the detail component from `@angular/forms`.
- Declare a class property `movieForm` of type `FormGroup` and assign a new `FormGroup` object to it in the`ngOnInit` function.
- Supply an object (literal) to the `FormGroup` as first parameter.
  - For every input field on the form (name, genre, rating), add a property to the object, with the name of the input field as key, and assign a new `FormControl` object as value to it.
  - Supply an initial/default 'value' to each `FormControl` as first parameter. As we are editing an existing movie, the default values should be the values from that movie.
> To synchronize the created `FormGroup` and `FormControl`'s to the template we use the `formGroup` and `formControlName` directives in the template.
- Add a property binding `[formGroup]` to the `form` element in the template and bind it to the `movieForm` object that we created in the component.
- Add a `formControlName` directive to each input field and use the same name you used in the `ngOnInit` function, for example `formControlName="genre"`.
> The `FormGroup` we bind to our root `form` element will store and handle all input and validations of its child controls and groups.
- Change the type of the save button to `submit` and remove the binding to the `click` event.
- Add an event binding `(ngSubmit)` to the form element and call `onSaveClicked()`. Notice this method won't need a parameter anymore.
- Alter the function `onSaveClicked` in the detail component class.
  - We need to map/set the form values to a Movie we want to emit. So make a new Movie object within the `OnSaveClicked` method and fill it with the `movieForm` values and the id of the movie (hint: `this.movie.id`). Pass this new Movie object to the `emit` method of the `save` output property.
  > You could use here `Object.assign` or JavaScript `spread` operator, because `value` has the same properties as a `Movie`.

**Result**:
> We now use a FormGroup and FormControls to capture input changes without directly modifying the model, and we are writing the data to the model on submit. We didnt use any bindings (ngModel) to the input fields themselfs.
> Next we want to validate the input changes and show validation messages. Please continu with 12b to continue with model driven forms.