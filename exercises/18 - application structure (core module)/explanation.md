Angular core module
=====================================================

**Core module**:
To avoid cluttering our root folder with app-wide-services and single-use-components that only appear in the root AppComponent, 
we can make a `CoreModule` an use it to bundle and expose those components and services to the AppModule. We import the `CoreModule` once when the app starts and never import anywhere else.

For example, we use the `CoreModule` to expose:
- a `MainNavigationComponent` that is used once in the application.
- a `UserService` that is used throughout the application and must be a singleton.