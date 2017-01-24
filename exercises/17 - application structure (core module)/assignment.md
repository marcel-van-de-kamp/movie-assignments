Assignment 14: Creating a core module
==============================================

> ## Create a navigation component for the app and add it to a core module

**Links**:
- [module faq](https://angular.io/docs/ts/latest/cookbook/ngmodule-faq.html#!#what-kinds-of-modules-should-i-have-and-how-should-i-use-them-)
- [core module styleguide](https://angular.io/docs/ts/latest/guide/style-guide.html#!#-a-id-04-11-a-core-feature-module)
- [core module guard](https://angular.io/docs/ts/latest/guide/ngmodule.html#!#prevent-reimport)

**Steps**:
- Create a new module with angular-cli command `ng g module core`.
- Delete the generated core component files: a core or shared module does not need a root component.
- Create a new navigation component with angular-cli command `ng g component core/navigation`.
- Add the component to the `declarations` and `exports` array of the core module.
- Add the `CoreModule` to the `imports` array of the app module.
- Move the navigation HTML in the app component template to the new navigation component.
- Use the navigation component in the app component template.
> Notice the navigation links won't work anymore, because the core module has no knowledge of the routerlink directive:
-  Add the `RouterModule` to the `imports` array of the core module.

**Extra**:
> The core module should only be imported and loaded once by the root module. We can force this behavior by adding a guard to the core module itself:
- Import the `Optional` and `SkipSelf` decorators from the angular core in the core module.
- Inject the `CoreModule` into its own constructor as a `parentModule` parameter.
  - To avoid a infinite injection loop, prepent the `@SkipSelf()` decorator to the parameter.
  - We expect the `CoreModule` to not exist yet, thats why we need to tell the injector that this is an optional parameter by also prepending the parameter with the `@Optional()` decorator.
- Add a 'guard' to the constructor by checking if `parentModule` is null/undefined. If it is defined, the core module has already been loaded and we need to throw an error / raise hell / crash everything.

**Result**:
> We now have a singleton navigation component which is imported and used at the root level of the application.