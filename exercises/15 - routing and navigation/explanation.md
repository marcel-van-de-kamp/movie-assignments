Routing in Angular
====================================================

**Angular forRoot convention**:
> The Angular router uses the `forRoot` convention to register the top level routes and wildcards.
> The Routes of all other modules will be child (or further) routes in the routing tree.  

**Routing wildcards**:
> When using a wildcard (`path: '**' `) for an angular route, it could overwrite child routes of other (child) feature modules (first hit is served).
> That's why the `RoutingModule` should always be added to the end of the `imports` array, so child routes will be hit first.