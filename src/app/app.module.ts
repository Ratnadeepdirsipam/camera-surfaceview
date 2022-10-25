import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// import { DocumentScanner } from '@ionic-native/document-scanner/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CameraservicesService } from './cameraservices.service';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
// import { Crop } from '@ionic-native/crop/ngx';
// import { AngularCropperjsModule } from 'angular-cropperjs';
// import {custumcamerasurfaceview} from '@ionic-native/custumcamerasurfaceview';
// import { camsvrs } from '@ionic-native/camsvrs/ngx';
// import { MediaCapture } from '@awesome-cordova-plugins/media-capture/ngx';
//, MediaFile, CaptureError, CaptureImageOptions
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BarcodeScanner,
    CameraservicesService,
    AndroidPermissions,
    // Crop
    // MediaCapture
    // camsvrs
    //,DocumentScanner
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
