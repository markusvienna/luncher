import { Location } from 'src/app/models/location.model';

export interface DataServiceInterface {
    getLocations(): Location[];
}
