Angular, Rxjs and Observables
==============================================

**RxJS**:
> RxJS ("Reactive Extensions") is a 3rd party library, endorsed by Angular, that implements the asynchronous observable pattern.
> Angular applications need it when working with the HTTP client. Additionally, you must import RxJS operators to make observables usable.

**RxJS operators**:
> The RxJS library is large. Size matters when building a production application and deploying it to mobile devices. You should include only necessary features.
> Accordingly, Angular exposes a stripped down version of `Observable` in the `rxjs/Observable` module that lacks most of the operators such as the `map` method.

**Fallback to promises**:
> Although the Angular http client API returns an `Observable<Response>` you can turn it into a `Promise<Response>`. 
> It's easy to do, and in simple cases, a promise-based version looks much like the observable-based version.

Observables can be transformed to promises with an Rxjs operator `toPromise`:

```typescript
import 'rxjs/add/operator/toPromise';
getMovies(): Promise<Movie[]> {
    return this.http.get(this.moviesUrl)
               .toPromise()
               .then(response => response.json() as Movie[])
               .catch(this.handleError);
  }
```