- difference module angular and typescript
- why create a feature module for movie
- by adding the components to the declarations array the can be used (in templates) of the current module
- by adding a service (or constant/value) to the providers array it becomes available to the angular dependency injector 

http://stackoverflow.com/questions/39062930/what-is-difference-between-declarations-providers-and-import-in-ngmodule

The root module and the feature module share the same execution context. They share the same dependency injector which means the services in one module are available to all.

There are two significant technical differences:

We boot the root module to launch the app; we import a feature module to extend the app.

A feature module can expose or hide its implementation from other modules.

Otherwise, a feature module is distinguished primarily by its intent.

A feature module delivers a cohesive set of functionality focused on an application business domain, a user workflow, a facility (forms, http, routing), or a collection of related utilities.


Improvements
There's a lot to like in the revised AppModule

It does not change as the Contact domain grows.
It only changes when we add new modules.
It's simpler:
Fewer import statements
No FormsModule import
No contact-specific declarations
No ContactService provider
No HighlightDirective conflict