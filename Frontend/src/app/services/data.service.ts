import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { typeMap } from '../utils/type-map.operator';
import { DataServiceInterface } from './data-service.interface';
import { MockDataService } from './mock-data.service';
import { Location } from 'src/app/models/location.model';

@Injectable({ providedIn: 'root', useClass: environment.useMockService ? MockDataService : DataService })
export class DataService implements DataServiceInterface {

    constructor(private httpClient: HttpClient) {}

    public getLocations(): Observable<Location[]> {
        return this.httpClient.get<any>(
            environment.apiURL +
            'GetLocations'
        )
            .pipe(
                typeMap(Location)
            );
    }
}
