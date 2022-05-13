import { Component } from '@angular/core';
import { FirebaseServiceService } from './firebase-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Luncher';

  constructor(
    private firebaseService: FirebaseServiceService
  ) {

  }

  ngInit() {
    console.log(this.firebaseService.getLocations());
  }
}
