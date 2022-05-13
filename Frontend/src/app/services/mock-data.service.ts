import { DataServiceInterface } from './data-service.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from 'src/app/models/location.model';
@Injectable({ providedIn: 'root' })
export class MockDataService implements DataServiceInterface {

    constructor(private httpClient: HttpClient) {}

    public getLocations(): Location[] {
        return [];
    }
}
