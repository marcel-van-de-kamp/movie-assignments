Angular shared module
===============================================================

**Shared module**:
> A shared module contains components, directives and pipes that are importable and reuseable by all feature modules.
> The *assets* found in a shared module are expected to share a *new* instance of themselves, and are therefore not singletons.

**Shared components**:
> A component is added to a shared module when it needs to be used on multiple occasions throughout the application by other components.

> For example, We want our loading-container component to be:
> - reusable throughout the application.
> - usable on component level, not (only) on app root level.
> - therefore we declare it in a shared module that we import in every module that needs it (movie and dashboard).

**Shared services**:
> Most of the time, you don't expose/export services in a shared module because they generally need to be singletons.
> Because of lazy loaded modules that import the shared module and the dependency injection tree that creates a new injector for every lazy loaded module,
> a service exported from a shared module won't be a singleton.
> If you want the service to be a singleton and still want to expose it via a shared module, you can expose it via the Angular ¹`forRoot` convention.


**Links**:
- [¹angular forRoot function convention](https://angular-2-training-book.rangle.io/handout/modules/shared-di-tree.html)