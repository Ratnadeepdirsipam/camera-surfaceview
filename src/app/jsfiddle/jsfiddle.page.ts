import { Component, OnInit } from '@angular/core';
import * as html2canvas from 'html2canvas/dist/html2canvas.min.js'
import { CameraservicesService } from '../cameraservices.service';
import { NavController } from '@ionic/angular';
import * as $ from 'jquery/dist/jquery.min.js';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
@Component({
  selector: 'app-jsfiddle',
  templateUrl: './jsfiddle.page.html',
  styleUrls: ['./jsfiddle.page.scss'],
})
export class JsfiddlePage implements OnInit {
  streamObj
  videoTag
  //camera preview start here
  deviceheight:string
  devicewidth:string
  device_left_right_width:string
  device_top_bottom_margin_left:string
  device_top_bottom_width:string
  device_top_bottom_height:string
  output_image_capture
  op_img_margin_top:string
  op_img_height:string
  sx
  sy
  sw
  sh
  //camera preview end here
  constructor(
    private cs:CameraservicesService,
    private nc:NavController,
    private androidPermission:AndroidPermissions
    ) { }

  ngOnInit() {
    this.streamObj = null;
    this.videoTag = document.getElementById('video');
    this.videoTag.display = "none"
    this.androidPermissions()
    // var update = (div, msg) => div.innerHTML = msg;
    //camera preview start here
    let t = document.getElementById('top')
    let b = document.getElementById('bottom')
    // this.blankvideo.width = window.innerWidth
    // this.blankvideo.width = window.innerHeight
    this.deviceheight = window.innerHeight + "px"
    this.devicewidth = window.innerWidth + "px"
    this.sx = window.innerWidth/5
    this.sy = window.innerHeight/4
    this.sw = window.innerWidth - window.innerWidth/5 - window.innerWidth/5
    this.sh = window.innerHeight - window.innerHeight/4 -window.innerHeight/4
    this.device_left_right_width = window.innerWidth/5 + "px"
    this.device_top_bottom_margin_left = this.device_left_right_width
    this.device_top_bottom_width = (window.innerWidth - window.innerWidth/5 - window.innerWidth/5) + "px"
    this.device_top_bottom_height = window.innerHeight/4 + "px" 
    t.style.marginLeft = this.device_top_bottom_margin_left
    b.style.marginLeft = this.device_top_bottom_margin_left
    // this.output_image_capture.style.marginTop = this.device_top_bottom_height
    this.op_img_height = (window.innerHeight - window.innerHeight/4 - window.innerHeight/4) + "px"
    //camera preview end here
    this.start()
  }

  androidPermissions()
  {
    try{
      this.androidPermission.checkPermission(this.androidPermission.PERMISSION.CAMERA).then(
        (result) => 
        {
          this.videoTag.display = "block"
          console.log('Has permission?',result.hasPermission)
      },
        err => this.androidPermission.requestPermission(this.androidPermission.PERMISSION.CAMERA)
      );
      
      this.androidPermission.requestPermissions([this.androidPermission.PERMISSION.CAMERA, this.androidPermission.PERMISSION.GET_ACCOUNTS]);
    }
    catch(e){console.log(e)}
  }

  start() {
    // {
    //   audio: false,
    //       video: {
    //         // optional:[],
    //         facingMode: 'environment',
    //         width: {exact: 1280},
    //         height: {exact: 720}
    //         // width:  this.getusermedialocalstreamwidth,
    //         // height: this.getusermedialocalstreamheight,
    //       }
    // }
    var constraints = {
      audio: false,
      video: {
        facingMode: 'environment',
        width: {exact: 1280},
        height: {exact: 720}
      }
    };
    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        //Play the media stream in the video element
        this.streamObj = stream;
        this.videoTag.srcObject = stream
        //video.play();
        // this.logStream(stream);

        this.videoTag.addEventListener("loadedmetadata",(e) => {
          console.log('loadedmetadata');
        });
        this.videoTag.addEventListener("loadeddata",(e) => {
          console.log('loadeddata');
          // this.update(vinfo, this.videoTag.videoWidth + " x " + this.videoTag.videoHeight);
          console.log('', this.videoTag.videoWidth + " x " + this.videoTag.videoHeight);
        });
        setTimeout(() => {
          this.videoTag.display = "block"
        }, 1000);
      })
      .catch(function(error) {
        if (error.name === 'ConstraintNotSatisfiedError') {
          console.error('The resolution ' + constraints.video.width.exact + 'x' +
            constraints.video.width.exact + ' px is not supported by your device.');
        } else if (error.name === 'PermissionDeniedError') {
          console.error('Permissions have not been granted to use your camera and ' +
            'microphone, you need to allow the page access to your devices in ' +
            'order for the demo to work.');
        } else {
          console.error('getUserMedia error: ' + error.name, error);
        }
      });
  }

  logStream(stream) {
    var tracks = stream.getTracks();
    console.log('stream ID:', stream.id);
    for (var i = 0; i < tracks.length; i++) {
      console.log("track ID:", tracks[i].id, "track label:", tracks[i].label, "kind:", tracks[i].kind);
    }
  }
  
  stop() {
    //streamObj.stop();
    var tracks = this.streamObj.getTracks();
    for (var i = 0; i < tracks.length; i++) {
      tracks[i].stop();
    }
    this.videoTag.srcObject = null; //set video tag src to null
  }
  
  test() {
    // console.log('adapter:', adapter);
    // console.log('browserDetails:', adapter.browserDetails);
    // console.log('extractVersion:', adapter.extractVersion);
    // console.log('disableLog:', adapter.disableLog);
    // console.log('browserShim:', adapter.browserShim);
  }

  capture(v)
  {

    try{
      let div =
      document.getElementById('deepu');//this.blankvideo //center-image
    html2canvas(this.videoTag).then(
      (canvas) => {
        // const context = canvas.getContext('2d');
        // context.drawImage(sx,sy,sw,sh,0, 0, window.innerWidth, window.innerHeight)
        this.cs.fromimagecapturetoimagecapturepreview = canvas.toDataURL('image/png');
        this.know_width_height(this.cs.fromimagecapturetoimagecapturepreview)
        // this.nc.navigateForward('devicewh')
        if(v==1)
        {
          setTimeout(() => {
          this.nc.navigateForward('imagecapturepreview')
          }, 1000);
        }
        else if(v==2)
        {
          this.nc.navigateForward('devicewh')
        }
        
        //devicewh //imagecapturepreview
        // this.cs.stopcamerastream.getVideoTracks().forEach((track) =>{track.stop()})
      })
    }catch(e){console.log(e)}
  }
  

  know_width_height(imageData)
  {
    // var imageData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADEElEQVRYha2Wz08TQRTHv7XLLyES1FSxgBTBYvGwSk1IKtQDSY2kNoGbHOSAVy9y4bZ/Bf4FmnDQS4PBRJMCmmgKkUvFEgglm9IqjXghlKbJesBZprtvuruVd2L5DvP9vDdvHuNSXj7T8C+8Hh+mx2dhNz59W0Tx+BCjQxPCNYnVODLZNHZzm6Qu8R/hYNSR+cevb/VvEUQmm8ZUbAaZvTQSybgJRAfwenzo67pdk/nn9fdCiN3cJjJ7aXRf82Mq5jeBnGML7WZvNOchPnx5Q/5NIhnXfz4BmcHTxy9wvf3mCQCVfb6gYn5xzpa5FQSrAh8MRAIqs88XVCytxvEjs+7InIcAzMeRSMYxFfOb1ksse5GxE/NqEHwvVAD0+2TML86RxrWYGyH4oKrg0jRNM60UmIfkCBobmoVAlB6SI1XnhCQSKHN+IyOESK92RQHArSiK4tS8q70XkrsOO9kNW7qa30a5XEJPR8AEYKqAlTmL+3ceAoBwFDPdqhIVAFTDNTY0mzbXtfomoUbpFIQOIOp29juWEYvV1BIWVl7p31a6CMKtKIpiddV2shuQ3HXoau8lN7fSjcH3hHs0NqTYuefM5NfvLLm5lS6CkIrHh5aLWVitdbIXABRLR5DYWVCTi49a54AoBgMjGBuePOmBno4AyuUS1Py2LXOnc0Bk7nK5Tm+BqBJnNQcoc8AwByiIs5wDRnMTAAVxVnOAMgcE/wuMPfG/c0BkTlaAhagSjfVN5D0X6dXMAeI9YHychOSI5RUVxWBgBGvfl0nN6/Fh4Ebw9FXMwvg6Hh2aQEiO1GQ+NjxJGj959BzT47PY2981H8HVy53o75YrqmB3WBnN+bJ7PT6Eg1H99b1/kENqK0n3QDgYNb0R7UIYzY3GLJbXFqBBg7vvXptysdWDCy1tuthyvhU/CyoKf/J4wB2J1cSkMr97axiXWj0V6/YPcni38hoAIG2pKWypKfR2DiAcjKLjSo+wCtUqYdXtVPYAdw0pkP5umdzACOHEnJ09C1MP8CB+AQAPUSwd2TYHKrMHgL+Lzhm5vrbesAAAAABJRU5ErkJggg==";
    // // this.videoTag.append("<img id='hiddenImage' src='"+imageData+"' />");
    // // var width = $('#hiddenImage').width();
    // // var height = $('#hiddenImage').height();
    // // $('#hiddenImage').remove();
    // // alert("width:"+width+" height:"+height);
    var i = new Image(); 
    i.src = imageData//?imageData:this.cs.fromimagecapturetoimagecapturepreview; 
    this.cs.captureimagewidth = i.width
    this.cs.captureimagewidth = i.height
    // setTimeout(function(){ alert ( "width:"+ i.width+" height:" + i.height ); },100);
  }

}
