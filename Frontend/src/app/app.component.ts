import { Component } from '@angular/core';
import { FirebaseServiceService } from './firebase-service.service';
import { OneSignal } from 'onesignal-ngx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Luncher';
  constructor(private oneSignal: OneSignal, 
    private firebaseService: FirebaseServiceService) {
    console.log(this.firebaseService.getLocations());
    this.oneSignal.init({
      appId: "d28070dc-7cd3-4f60-8cc3-a096045ab4cd",
      allowLocalhostAsSecureOrigin: true
    }).then(() => {
      console.log("BumstiWumsti");
      this.oneSignal.getUserId().then(function(externalUserId){
        console.log("externalUserId: ", externalUserId);
      });            
    });


    // Stuff to filter later
    this.oneSignal.sendTag("tech", "tag").then(() => {
      console.log("Sent tag: " + "tag");
    });
  }
  ngInit() { }
}
