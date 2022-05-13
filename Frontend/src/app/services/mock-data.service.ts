import { DataServiceInterface } from './data-service.interface';
import { GetLocationsResponse } from '../models/backend-response.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from 'src/app/models/location.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { typeMap } from 'src/app/utils/type-map.operator';

@Injectable({ providedIn: 'root' })
export class MockDataService implements DataServiceInterface {

    constructor(private httpClient: HttpClient) {}

    public getLocations(): Observable<Location[]> {
        return this.httpClient.get<GetLocationsResponse>('./mock-data/locations.json')
            .pipe(
                map(locationsResponse => locationsResponse.locations),
                typeMap(Location)
            );
    }
}
