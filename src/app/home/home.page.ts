import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
// import { DocumentScanner, DocumentScannerOptions } from '@ionic-native/document-scanner/ngx';
import { CameraservicesService } from '../cameraservices.service';
import { NavController } from '@ionic/angular';
// import { QRScanner } from 'cordova-plugin-qrscanner-with-capture';
//import { camsvrs } from '@ionic-native/camsvrs/ngx';
// declare var cordova: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  scannedData: any;
  encodedData: '';
  encodeData: any;
  inputData: any;
  data:any;
  stream
  imageCapture; 
  devicewidth
  deviceheight
  constructor(
    private barcodeScanner: BarcodeScanner,private custumcam:CameraservicesService,
    private nvc:NavController
    // private qrs:QRScanner
    //private custumcamerapreview:camsvrs
    //,private documentScanner: DocumentScanner
    ) { }

    // getusermedialocalstreamwidth:number
    // getusermedialocalstreamheight:number
    ngOnInit()
    {
      this.devicewidth = window.innerWidth
      this.deviceheight = window.innerHeight
    }

    // <hook type="before_build" src="scripts/android/appAndroidBeforeBuild.bat" />
    // <hook type="before_build" src="scripts/android/appAndroidBeforeBuild.js" />
    // <hook type="before_plugin_install" src="scripts/android/appAndroidBeforePluginInstall.js" />
    // navigator.getUserMedia = ( navigator.getUserMedia ||
    //   navigator.webkitGetUserMedia ||
    //   navigator.mozGetUserMedia ||
    //   navigator.msGetUserMedia);

 video;
webcamStream;
  scanBarcode() {
    const options: BarcodeScannerOptions = {
      preferFrontCamera: false,
      showFlipCameraButton: true,
      showTorchButton: true,
      torchOn: false,
      prompt: 'Place a barcode inside the scan area',
      resultDisplayDuration: 500,
      formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
      orientation: 'portrait',
    };

    this.barcodeScanner.scan(options).then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.scannedData = JSON.stringify(barcodeData);

    }).catch(err => {
      console.log('Error', err);
    });
  }

  // createBarcode(inputval) {
  //   this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, inputval.value).then((encodedData) => {
  //     console.log(encodedData);
  //     this.encodedData = encodedData;
  //   }, (err) => {
  //     console.log('Error occured : ' + err);
  //   });
  // }


  // openSccanner() {
  //   let opts: DocumentScannerOptions = {};
  //   this.documentScanner.scanDoc(opts)
  // .then((res: string) => {
  //   console.log(res)
  //   this.data = res;
  // })
  // .catch((error: any) => console.error(error));
  // }
 
  sample_custum_plugin()
  {
    
    let data = {
      param1:143,
      param2:143
    }
    // this.qrs.scan(this.displayContents);
    // this.custumcamerapreview.add(data).then((r) =>{
    //   alert(r)
    //   this.data = r
    // }).catch((e) =>{
    //   alert(e)
    //   this.data = e
    // })
    // this.custumcamerapreview.add(123,123).then((r) =>{
    //   alert(r)
    //   this.data = r
    // }).catch((e) =>{
    //   alert(e)
    //   this.data = e
    // })

  }



  camerapage(w,h)
  {
    sessionStorage.setItem("getusermedialocalstreamwidth",w)
    sessionStorage.setItem("getusermedialocalstreamheight",h)
    // this.nvc.navigateForward('cameracapture')
    location.href = "cameracapture"
  }

  photosize(w,h)
  {
    sessionStorage.setItem("getusermedialocalstreamwidth",w)
    sessionStorage.setItem("getusermedialocalstreamheight",h)
    this.nvc.navigateForward('photosize')
    // location.href = "cameracapture"
  }

  imagecapture(w,h)
  {
    sessionStorage.setItem("getusermedialocalstreamwidth",w)
    sessionStorage.setItem("getusermedialocalstreamheight",h)
    this.nvc.navigateForward('imagecapture')
    // location.href = "cameracapture"
  }

  newimagecapture(w,h)
  {
    sessionStorage.setItem("getusermedialocalstreamwidth",w)
    sessionStorage.setItem("getusermedialocalstreamheight",h)
    // this.nvc.navigateForward('newimagecapture')
    location.href = "cameracapture"
  }

  cropinjs(w,h)
  {
    sessionStorage.setItem("getusermedialocalstreamwidth",w)
    sessionStorage.setItem("getusermedialocalstreamheight",h)
    this.nvc.navigateForward('cropinjs')
    // location.href = "cameracapture"
  }
  framingimg()
  {
    this.nvc.navigateForward('framingimg')
  }
  screenshot()
  {
    this.nvc.navigateForward('screenshot')
  }

  jsfiddle()
  {
    this.nvc.navigateForward('jsfiddle')
  }


  getMediaStream()
{ 
    window.navigator.mediaDevices.getUserMedia({video: true})
    .then((mediaStream) => { 
        this.stream = mediaStream; 
        let mediaStreamTrack = mediaStream.getVideoTracks()[0];
        // this.imageCapture = new ImageCapture(mediaStreamTrack);
        // console.log(this.imageCapture);
    })
    .catch(this.error);
}

error(error)
{ 
    console.error('error:', error); 
}

// takePhoto(img)
// { 
//     const img = img || document.querySelector('img');

//     imageCapture.takePhoto()
//     .then(blob => {
//         let url = window.URL.createObjectURL(blob);
//         img.src = url;

//         window.URL.revokeObjectURL(url); 
//     })
//     .catch(error);
// }; 

  

}
