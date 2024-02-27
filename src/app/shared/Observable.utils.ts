import { Observable } from 'rxjs';

export function ObservableToPromise<T = unknown>(
  obs: Observable<T>
): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    obs.subscribe(resolve, reject);
  });
}
