import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';

import { Camera } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Geofence } from '@ionic-native/geofence/ngx';

import { WebView } from '@ionic-native/ionic-webview/ngx';

import { File } from '@ionic-native/file/ngx';

import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthGuardModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    Geolocation,
    Geofence,
    SplashScreen,
    WebView,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera,
    File
    // { provide: Camera, useClass: CameraMock}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
