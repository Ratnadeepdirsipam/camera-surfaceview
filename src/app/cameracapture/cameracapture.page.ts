import { Component, OnInit } from '@angular/core';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { NavController } from '@ionic/angular';
import { CameraservicesService } from '../cameraservices.service';
@Component({
  selector: 'app-cameracapture',
  templateUrl: './cameracapture.page.html',
  styleUrls: ['./cameracapture.page.scss'],
})
export class CameracapturePage implements OnInit {
  // video
  videoconstrains:boolean = true
  stopcamerastream:any
  getUserMediaPrefixed
  videoStream
  videoTag;
  width = 320; // We will scale the photo width to this
  height = 0; // This will be computed based on the input stream
  campreview:boolean  = true

  // |streaming| indicates whether or not we're currently streaming
  // video from the camera. Obviously, we start at false.

  streaming = false;

  // The various HTML elements we need to configure or control. These
  // will be set by the startup() function.
  imageBase64:string
  video = null;
  canvas = null;
  photo = null;
  startbutton = null;
  deviceheight:string
  devicewidth:string
  deviceheightLW:string
  deviceheightLH:string
  deviceheightRW:string
  deviceheightRWN:number
  constructor(
    private androidPermissions: AndroidPermissions,private nc:NavController,private cs:CameraservicesService
    ) { }


  ngOnInit() {
    let t = document.getElementById('top')
    let b = document.getElementById('bottom')
    let r = document.getElementById('right')
    this.deviceheight = window.innerHeight + "px"
    this.devicewidth = window.innerWidth + "px"
    this.deviceheightLW = window.innerWidth/4 + "px"
    this.deviceheightLH = window.innerWidth/1.6 + "px"
    this.deviceheightRWN = window.innerWidth/1.6
    this.deviceheightRW = (window.innerHeight - this.deviceheightRWN - this.deviceheightRWN) + "px" 
    t.style.marginLeft = this.deviceheightLW
    b.style.marginLeft = this.deviceheightLW
    r.style.marginTop = this.deviceheightLH
   
    
    console.log(window.innerHeight,window.innerWidth,this.deviceheightLW,this.deviceheightRW)
    try{
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
        result => console.log('Has permission?',result.hasPermission),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
      );
      
      this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
    }
    catch(e){console.log(e)}
    this.video = document.getElementById('video') //document.querySelector("#video");//
  this.startup()
  }

  istanceBetweenElements(e1,e2) {
    let a = e1.getBoundingClientRect()
    let b = e2.getBoundingClientRect()
    console.log(a.top,a.left,a.bottom,a.right)
    console.log(b.top,b.left,b.bottom,b.right)
  }
  startWebcam()
  {
    let stream  = navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    // this.video.src = stream
  }

  showViewLiveResultButton() {
    if (window.self !== window.top) {
      // Ensure that if our document is in a frame, we get the user
      // to first open it in its own tab or window. Otherwise, it
      // won't be able to request permission for camera access.
      document.querySelector(".contentarea").remove();
      const button = document.createElement("button");
      button.textContent = "View live result of the example code above";
      document.body.append(button);
      button.addEventListener('click', () => window.open(location.href));
      return true;
    }
    return false;
  }

  getusermedialocalstreamwidth//:number
  getusermedialocalstreamheight//:number
  startup() {
    var ResolutionsToCheck = [
      {width: 160, height:120},
      {width: 320, height:180},
      {width: 320, height:240},
      {width: 640, height:360},
      {width: 640, height:480},
      {width: 768, height:576},
      {width: 1024, height:576},
      {width: 1280, height:720},
      {width: 1280, height:768},
      {width: 1280, height:800},
      {width: 1280, height:900},
      {width: 1280, height:1000},
      {width: 1920, height:1080},
      {width: 1920, height:1200},
      {width: 2560, height:1440},
      {width: 3840, height:2160},
      {width: 4096, height:2160}
  ];

  var left = 0;
  var right = ResolutionsToCheck.length;
  var selectedWidth;
  var selectedHeight;
  var mid;
  console.log("left:right = ", left, ":", right);
    if(left > right)
    {
        console.log("Selected Height:Width = ", selectedWidth, ":", selectedHeight);
        return;
    }

    mid = Math.floor((left + right) / 2);


    if (this.showViewLiveResultButton()) { return; }
    this.video = document.getElementById('video');
    this.canvas = document.getElementById('canvas');
    this.photo = document.getElementById('photo');
    this.startbutton = document.getElementById('startbutton');

    // navigator.mediaDevices.getUserMedia({
    //   audio: false,
    //   video: {
    //     facingMode: 'environment',
    //     // width:9999,
    //     // height: 9999,
    //     // focusMode:true
    //   }
    // })

    var temporaryConstraints = {
      "audio": false,
      "video": {
          "mandatory": {
          "minWidth": ResolutionsToCheck[mid].width,
          "minHeight": ResolutionsToCheck[mid].height,
          "maxWidth": ResolutionsToCheck[mid].width,
          "maxHeight": ResolutionsToCheck[mid].height
          },
      "optional": []
      }
  }
  console.log(sessionStorage.getItem("getusermedialocalstreamwidth"),sessionStorage.getItem("getusermedialocalstreamheight"))
  this.getusermedialocalstreamwidth = sessionStorage.getItem("getusermedialocalstreamwidth")
  this.getusermedialocalstreamheight = sessionStorage.getItem("getusermedialocalstreamheight")
  // alert(this.getusermedialocalstreamwidth+":"+this.getusermedialocalstreamheight)
  navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        // optional:[],
        facingMode: 'environment',
        width:  this.getusermedialocalstreamwidth,
        height: this.getusermedialocalstreamheight,
      }
    })
      .then((stream) => {
        this.video.srcObject = stream;
        this.stopcamerastream = stream;
        this.video.play();
      })
      .catch((err) => {
        alert(`An error occurred: ${err}`)
        console.error(`An error occurred: ${err}`);
      });

    this.video.addEventListener('canplay', (ev) => {
      if (!this.streaming) {
        this.height = this.video.videoHeight / (this.video.videoWidth/this.width);

        // Firefox currently has a bug where the height can't be read from
        // the video, so we will make assumptions if this happens.

        if (isNaN(this.height)) {
          this.height = this.width / (4/3);
          // this.height = this.width / (1);
        }

        this.video.setAttribute('width', this.width);
        this.video.setAttribute('height', this.height);
        // this.canvas.setAttribute('width', this.getusermedialocalstreamwidth);
        // this.canvas.setAttribute('height', this.getusermedialocalstreamheight);
        this.canvas.setAttribute('width', this.width);
        this.canvas.setAttribute('height', this.height);
        this.streaming = true;
      }
    }, false);

    // this.startbutton.addEventListener('click', (ev) => {
    //   this.takepicture();
    //   ev.preventDefault();
    // }, false);

    // this.clearphoto();
  }

  clearphoto() {
    const context = this.canvas.getContext('2d');
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    const data = this.canvas.toDataURL('image/png');
    this.photo.setAttribute('src', data);
  }

  takepicture() {
    // this.nc.navigateForward('cropcaptureimage')
    try{
      this.campreview = false

    const context = this.canvas.getContext('2d');
    if (this.width && this.height) {
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      console.log(this.video, 0, 0, this.width, this.height)
      context.drawImage(this.video, 0, 0, this.width, this.height);

      const data = this.canvas.toDataURL('image/png');
      this.imageBase64 = data
      this.cs.datafromstreamtodisplay = data
      setTimeout(() => {
        this.videoconstrains = false
        this.cs.fromimagecapturetoimagecapturepreview = this.canvas.toDataURL('image/png');
        this.nc.navigateForward('framingimg')
        this.stopcamerastream.getVideoTracks().forEach((track) =>{track.stop()})
        // this.nc.navigateForward('cropcaptureimage')
        // location.href = "cropcaptureimage"
      }, 500);
      // console.log(data)
      this.photo.setAttribute('src', data);
    } else {
      this.clearphoto();
    }
    }catch(e){console.log(e)}
    
  }
}
