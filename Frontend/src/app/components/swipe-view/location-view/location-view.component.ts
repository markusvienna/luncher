import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-view',
  templateUrl: './location-view.component.html',
  styleUrls: ['./location-view.component.scss']
})
export class LocationViewComponent implements OnInit {
  @Input() location: Location;

  ngOnInit(): void {
  }

}
