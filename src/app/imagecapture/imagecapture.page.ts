import { Component, OnInit } from '@angular/core';
import { CameraservicesService } from '../cameraservices.service';
import { NavController } from '@ionic/angular';
import { get } from 'scriptjs';
declare  const newimgcapture:  any;
// declare const ChromeSamples:any;
import * as html2canvas from 'html2canvas/dist/html2canvas.min.js'
@Component({
  selector: 'app-imagecapture',
  templateUrl: './imagecapture.page.html',
  styleUrls: ['./imagecapture.page.scss'],
})
export class ImagecapturePage implements OnInit {
  
  input
  imageCapture
  canvas
  ctx
  getusermedialocalstreamwidth// = sessionStorage.getItem("getusermedialocalstreamwidth")
  getusermedialocalstreamheight// = sessionStorage.getItem("getusermedialocalstreamheight")
  displayimage
  startbutton = null;

  width = 320; // We will scale the photo width to this
  height = 0; // This will be computed based on the input stream
  streaming:boolean = false

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
  imageCapture_takePhoto:any = {}
  blankvideo

  stopcamerastream:any
  constructor(
    private nc:NavController,private cs:CameraservicesService
    ) { }

  ngOnInit() {
    // this.output_image_capture = document.getElementById('center-image')
    this.blankvideo = document.getElementById('video')
    // this.canvas = document.getElementById('canvas')
    this.blankvideo.style.display = "none"
    this.displayimage = document.getElementById('bscsrc')
    get("assets/javascript/custumimgcapture.js", () => {})
    // this.input = document.querySelector('input[type="range"]');

    this.canvas = document.createElement("canvas");
    this.canvas.width = 3000;
    this.canvas.height = 3000;
    this.ctx = this.canvas.getContext("bitmaprenderer");
    
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
   this.camcall()
  }

  // let sx = window.innerWidth/5
  // let sy = window.innerHeight/2
  // let sw = window.innerWidth - window.innerWidth/5 -window.innerWidth/5
  // let sh = window.innerHeight - window.innerHeight/2 - window.innerHeight/2


  async camcall()
  {
    console.log(this.blankvideo.style.display)
    this.getusermedialocalstreamwidth = sessionStorage.getItem("getusermedialocalstreamwidth")
    this.getusermedialocalstreamheight = sessionStorage.getItem("getusermedialocalstreamheight")
    // {
    // audio: false,
    // video: {
    //   width: {exact: 1280},
    //   height: {exact: 720}
    // }

    await navigator.mediaDevices.getUserMedia({
      audio: false,
          video: {
            // optional:[],
            facingMode: 'environment',
            width: {exact: 1280},
            height: {exact: 720}
            // width:  this.getusermedialocalstreamwidth,
            // height: this.getusermedialocalstreamheight,
          }
    })
    .then(mediaStream => {
      this.blankvideo
      // console.log(mediaStream.getVideoTracks().length)
      // let videoTag.srcObject = stream;
      // let {width, height} = mediaStream.getTracks()[0].getSettings();
      // console.log(`${width}x${height}`);
      this.cs.stopcamerastream = mediaStream
      // document.querySelector('video')
      this.blankvideo.srcObject = mediaStream;
      setTimeout(() => {
        this.blankvideo.style.display = "block"
        // console.log( this.blankvideo.style.display)
        console.log(this.blankvideo.videoWidth,this.blankvideo.videoHeight)
        // console.log(this.blankvideo.style.width,this.blankvideo.style.height)
        this.stream_width_height()
      }, 1000);
      const track = mediaStream.getVideoTracks()[0];
      this.imageCapture = newimgcapture(track);
      console.log(this.imageCapture)
      return this.imageCapture.getPhotoCapabilities();
      })
      .then(photoCapabilities => {
      const settings = this.imageCapture.track.getSettings();
      this.imageCapture_takePhoto['imageWidth'] = photoCapabilities.imageWidth.min;
      this.imageCapture_takePhoto['imageWidth'] = photoCapabilities.imageWidth.max;
      // this.imageCapture_takePhoto['imageWidth'] = photoCapabilities.imageWidth.step;
      // this.imageCapture_takePhoto['fillLightMode'] = "flash"
      this.imageCapture_takePhoto['imageHeight'] = photoCapabilities.imageHeight.max
      // this.imageCapture_takePhoto['redEyeReduction'] = false
      console.log(this.imageCapture_takePhoto)
      return this.imageCapture.getPhotoSettings();
      })
      .then(photoSettings => {
        console.log(photoSettings.imageWidth)
      })
      .catch(error => {console.log(error)}
      
        );
  }


  stream_width_height()
  {
    if (!this.streaming) {
      this.height = this.blankvideo.videoHeight / (this.blankvideo.videoWidth/this.width);

      // Firefox currently has a bug where the height can't be read from
      // the video, so we will make assumptions if this happens.

      if (isNaN(this.height)) {
        this.height = this.width / (4/3);
        // this.height = this.width / (1);
      }

      this.blankvideo.setAttribute('width', this.width);
      this.blankvideo.setAttribute('height', this.height);
      // this.canvas.setAttribute('width', this.getusermedialocalstreamwidth);
      // this.canvas.setAttribute('height', this.getusermedialocalstreamheight);
      this.canvas.setAttribute('width', this.width);
      this.canvas.setAttribute('height', this.height);
      this.streaming = true;
    }
  }
  
snapcount:number=0
takesnap1()
{
  try{
        this.imageCapture.takePhoto(this.imageCapture_takePhoto)
        .then(blob => createImageBitmap(blob))
        .then(imageBitmap => {
          setTimeout(() => {
          this.ctx.transferFromImageBitmap(imageBitmap);
          this.cs.fromimagecapturetoimagecapturepreview = this.canvas.toDataURL('image/png');
          this.nc.navigateForward('imagecapturepreview')
          this.cs.stopcamerastream.getVideoTracks().forEach((track) =>{track.stop()})
        }, 500);
        })
        .catch(error => {alert(error)});
    }
    catch(e){alert(e)}
}
takesnap2(){
  try{
  const context = this.canvas.getContext('2d');
  if (this.width && this.height) {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    console.log(this.blankvideo, 0, 0, this.width, this.height)
    context.drawImage(this.blankvideo.value, 0, 0, this.width, this.height);
    setTimeout(() => {
      // contex.drawImage(this.preview, 
      //   (this.preview.width - 500) / 2,   // sx, 200 pixels to the left from center
      //   (this.preview.height - 500) / 2,  // sy, 175 pixels above center
      //   400, 350, 0, 0, 400, 350);  // sw, sh, dx, dy, dw, dh
      this.cs.fromimagecapturetoimagecapturepreview = this.canvas.toDataURL('image/png');
      this.nc.navigateForward('imagecapturepreview')
      this.cs.stopcamerastream.getVideoTracks().forEach((track) =>{track.stop()})
    }, 500);
  } else {
  }
  }catch(e){console.log(e)}
}
takesnap3(){
  try{
    this.imageCapture.takePhoto(this.imageCapture_takePhoto)
    .then(blob => createImageBitmap(blob))
    .then(imageBitmap => {
      setTimeout(() => {
      this.ctx.transferFromImageBitmap(imageBitmap);
      this.cs.fromimagecapturetoimagecapturepreview = this.canvas.toDataURL('image/png');
      this.nc.navigateForward('framingimg')
      this.cs.stopcamerastream.getVideoTracks().forEach((track) =>{track.stop()})
    }, 500);
    })
    .catch(error => {alert(error)});
}
catch(e){alert(e)}
}
takesnap4(){
  try{
    let div =
    document.getElementById('deepu');//this.blankvideo //center-image
  html2canvas(this.blankvideo).then(
    (canvas) => {
      // const context = canvas.getContext('2d');
      // context.drawImage(sx,sy,sw,sh,0, 0, window.innerWidth, window.innerHeight)
      this.cs.fromimagecapturetoimagecapturepreview = canvas.toDataURL('image/png');
      this.nc.navigateForward('imagecapturepreview')
      this.cs.stopcamerastream.getVideoTracks().forEach((track) =>{track.stop()})
    })
  }catch(e){console.log(e)}
}
ss
async takesnap5(){
 
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const video = document.createElement("video");
    try {
      const captureStream = await navigator.mediaDevices.getDisplayMedia();
      // let captureStream = await navigator.mediaDevices.getDisplayMedia({video:true});
      video.srcObject = captureStream;
      context.drawImage(video, 0, 0, window.innerWidth, window.innerHeight);
      const frame = canvas.toDataURL("image/png");
      captureStream.getTracks().forEach(track => track.stop());
      // this.ss = document.getElementById('displayss')
      // this.ss.src = frame
      this.cs.fromimagecapturetoimagecapturepreview = frame//this.canvas.toDataURL('image/png');
      this.nc.navigateForward('imagecapturepreview')
      this.cs.stopcamerastream.getVideoTracks().forEach((track) =>{track.stop()})
      // window.location.href = frame;
    } catch (err) {
      console.error("Error: " + err);
    }
  
}
takesnap6(){
  try{
    let div =
    document.getElementById('deepu');//this.blankvideo //center-image
  html2canvas(this.blankvideo).then(
    (canvas) => {
      // const context = canvas.getContext('2d');
      // context.drawImage(sx,sy,sw,sh,0, 0, window.innerWidth, window.innerHeight)
      this.cs.fromimagecapturetoimagecapturepreview = canvas.toDataURL('image/png');
      this.nc.navigateForward('devicewh')
      this.cs.stopcamerastream.getVideoTracks().forEach((track) =>{track.stop()})
    })
  }catch(e){console.log(e)}
}


clickstillphoto(v)
{
  if(v == 1){this.takesnap1()}
  if(v == 2){this.takesnap2()}
  if(v == 3){this.takesnap3()}
  if(v == 4){this.takesnap4()}
  if(v == 5){this.takesnap5()}
  if(v == 6){this.takesnap6()}
}

// rotate(canvas,context,sourceimage) {
//   var imgwidth = sourceimage.offsetWidth;
//   var imgheight = sourceimage.offsetHeight;
//   canvas.width = imgwidth;
//   canvas.height = imgheight;
//   context.save();
//   context.translate(imgwidth / 2, imgheight / 2);
//   context.rotate(Math.PI/2);
//   context.drawImage(
//     sourceimage, -(imgwidth / 2), -(imgheight / 2)
//   );
//   context.restore();
// }

// takepicture() {
//   // this.nc.navigateForward('cropcaptureimage')
//   try{
    

  // const context = this.canvas.getContext('2d');
  // if (this.width && this.height) {
  //   this.canvas.width = this.width;
  //   this.canvas.height = this.height;
  //   context.drawImage(this.video, 0, 0, this.width, this.height);

  //   const data = this.canvas.toDataURL('image/png');
  //   this.imageBase64 = data
  //   this.cs.datafromstreamtodisplay = data
  //   setTimeout(() => {
  //     this.videoconstrains = false
  //     this.stopcamerastream.getVideoTracks().forEach((track) =>{track.stop()})
  //     this.nc.navigateForward('cropcaptureimage')
  //     // location.href = "cropcaptureimage"
  //   }, 500);
  //   // console.log(data)
  //   this.photo.setAttribute('src', data);
  // } else {
  
  // }
//   }catch(e){console.log(e)}
  
// }
// imageBitmapdata
// onTakePhotoButtonClick() 
// {
//   try{
//   //  console.log(this.input.value)
//       this.imageCapture.takePhoto(this.imageCapture_takePhoto)//this.imageCapture.takePhoto({imageWidth: 1280})
//       .then(blob => createImageBitmap(blob))
//       .then(imageBitmap => {
//         this.imageBitmapdata = imageBitmap
//         this.showimg(imageBitmap)
//         console.log(`Photo size is ${imageBitmap.width}x${imageBitmap.height}`)
//         // alert(`Photo size is ${imageBitmap.width}x${imageBitmap.height}`)
//       })
//       .catch(error => {console.log(error)}
//         // ChromeSamples.log(error)
//         );
      
//   }
//   catch(e){console.log(e)}
// }

// nextaftercapture(){this.showimg(this.imageBitmapdata)}

// opimgbase64img
// showimg(bitmap)
// {
//   // const showimgshowimg = document.getElementById('showimg')
//   // const canvas = document.createElement("canvas");
//   // canvas.width = 3000;
//   // canvas.height = 3000;
//   // const ctx = canvas.getContext("bitmaprenderer");
  
//   // this.rotate(canvas,ctx,bitmap)
//   // ctx.rotate(20 * Math.PI / 180);
//   this.ctx.transferFromImageBitmap(bitmap);
//   setTimeout(() => {
//     const data = this.canvas.toDataURL('image/png');
//     // console.log(data)
//     this.cs.fromimagecapturetoimagecapturepreview = data
//     this.nc.navigateForward('imagecapturepreview')
//     this.cs.stopcamerastream.getVideoTracks().forEach((track) =>{track.stop()})

//   }, 1000);
  
  
// }



}


