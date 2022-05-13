import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Location } from 'src/app/models/location.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-swipe-view',
    templateUrl: './swipe-view.component.html',
    styleUrls: ['./swipe-view.component.scss']
})
export class SwipeViewComponent implements OnInit {
    public locations: Location[] = [];
    public currentLocation: Location;

    private _locationIndex = 0;

    constructor(
        private _dataService: DataService,
        private _router: Router
        ) { }

    ngOnInit(): void {
        this.locations = this._dataService.getLocations();
    }

    swipeRight(): void {
        // save current location to selectedLocations
    }

    swipeLeft(): void {
        this.nextLocation();
    }

    nextLocation(): void {
        this._locationIndex = this._locationIndex++;
        if (this._locationIndex < this.locations.length) {
            // show next location
            this.currentLocation = this.locations[this._locationIndex];
        } else {
            // show overview
            this._router.navigate(['overview']);
        }
    }
}
