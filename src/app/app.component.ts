import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Geolocation} from '@ionic-native/geolocation/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx'
// import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  // constructor(
  //   private platform: Platform,
  //   private splashScreen: SplashScreen,
  //   private statusBar: StatusBar,
  //   private oneSignal: OneSignal,
  //   private alertCtrl: AlertController
  // ) {
  //   this.initializeApp();
  // }

  // initializeApp() {
  //   this.platform.ready().then(() => {
  //     this.statusBar.styleDefault();
  //     this.splashScreen.hide();

  //     if (this.platform.is('cordova')){
  //       this.setupPush();
  //     }
  //   });
  // }

  // setupPush() {
  //   this.oneSignal.startInit('a8b71954-a37d-4675-81c3-cbc121d9d4fb', '79982833297');

  //   this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);

  //   this.oneSignal.handleNotificationOpened().subscribe(data => {
  //     let additionalData = data.notification.payload.additionalData;
  //     this.showAlert('Notification opened', 'You already read this', additionalData);
  //   });

  //   this.oneSignal.handleNotificationReceived().subscribe(data => {
  //     let msg = data.payload.body;
  //     let title = data.payload.title;
  //     let additionalData = data.payload.additionalData;
  //     this.showAlert(title, msg, additionalData.task);
  //   });

  //   this.oneSignal.endInit();
  // }

  // async showAlert(title, msg, task){
  //   const alert = await this.alertCtrl.create({
  //     header: title,
  //     subHeader: msg, 
  //     buttons: [
  //       {
  //         text: `Action: ${task}`,
  //         handler: () => {

  //         }     
  //       }
  //     ]
  //   })
  //   alert.present();
  // }
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
  
      // OneSignal Code start:
      // Enable to debug issues:
      // window["plugins"].OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
  
      var notificationOpenedCallback = function(jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      };
  
      window["plugins"].OneSignal
        .startInit("YOUR_APPID", "YOUR_GOOGLE_PROJECT_NUMBER_IF_ANDROID")
        .handleNotificationOpened(notificationOpenedCallback)
        .endInit();
    });
  }
}
