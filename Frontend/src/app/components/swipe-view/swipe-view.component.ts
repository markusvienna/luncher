import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Location } from 'src/app/models/location.model';

@Component({
    selector: 'app-swipe-view',
    templateUrl: './swipe-view.component.html',
    styleUrls: ['./swipe-view.component.scss']
})
export class SwipeViewComponent implements OnInit, OnDestroy {
    public locations: Location[] = [];
    private _subscriptions: Subscription[] = [];

    constructor(private _dataService: DataService) { }

    ngOnInit(): void {
        this._subscriptions.push(this._dataService.getLocations().subscribe(
            (locations: Location[]) => {
                this.locations = locations;
            }
        ));
    }

    ngOnDestroy(): void {
        this._subscriptions.forEach(sub => sub.unsubscribe());
    }
}
