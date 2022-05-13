import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export const typeMap = <T1, T2>(type: { new(item: T1) }): (source: Observable<T1[]>) => Observable<T2[]> =>
    (source: Observable<T1[]>) => source.pipe(map((items) => {
        if (!Array.isArray(items) || items.length === 0) {
            return [];
        } else {
            return items.map((item) => new type(item));
        }
    }));
