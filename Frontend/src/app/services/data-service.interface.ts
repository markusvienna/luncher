import { Observable } from 'rxjs';
import { Location } from 'src/app/models/location.model';

export interface DataServiceInterface {
    getLocations(): Observable<Location[]>;
}
