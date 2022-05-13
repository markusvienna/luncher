import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataServiceInterface } from './data-service.interface';
import { MockDataService } from './mock-data.service';
import { Location } from 'src/app/models/location.model';
import { FirebaseServiceService } from '../firebase-service.service';

@Injectable({ providedIn: 'root', useClass: environment.useMockService ? MockDataService : DataService })
export class DataService implements DataServiceInterface {

    constructor(
        private _firebaseService: FirebaseServiceService,
        ) {}

    public getLocations(): Location[] {
        return this._firebaseService.getLocations().locations.map(locationResponse => new Location(locationResponse));
        // return this.httpClient.get<any>(
        //     environment.apiURL +
        //     'GetLocations'
        // )
        //     .pipe(
        //         typeMap(Location)
        //     );
    }
}
