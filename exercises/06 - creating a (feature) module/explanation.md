Angular modules (NgModule)
=================================================

- By adding the components to the declarations array the can be used (in templates) of the current module
- By adding a service (or constant/value) to the providers array it becomes available to the angular dependency injector 

- es6/typescript modules --> encapsulation and scoping of variables
- angular modules `ngModule` --> blocks of functionality 

> The root module and the feature module share the same execution context. They share the same dependency injector which means the services in one module are available to all.
> There are two significant technical differences:
> 1. We boot the root module to launch the app; we import a feature module to extend the app.
> 2. A feature module can expose or hide its implementation from other modules.

> Otherwise, a feature module is distinguished primarily by its intent.
> A feature module delivers a cohesive set of functionality focused on an application business domain, a user workflow, a facility (forms, http, routing), or a collection of related utilities.
> A feature module collaborates with the root module and with other modules through the services it provides and the components, directives, and pipes that it chooses to share.

**Links**:
- [difference angular ngModule and ES6 Modules](http://blog.angular-university.io/angular2-ngmodule/#angular2modulesvses6modules)
- [angular module declarations, providers and imports](http://stackoverflow.com/questions/39062930/what-is-difference-between-declarations-providers-and-import-in-ngmodule)
- [typescript modules](https://www.typescriptlang.org/docs/handbook/modules.html)
- [angular 2 modules](https://angular.io/docs/ts/latest/guide/ngmodule.html)
