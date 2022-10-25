import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photosize',
  templateUrl: './photosize.page.html',
  styleUrls: ['./photosize.page.scss'],
})
export class PhotosizePage implements OnInit {
  input
  imageCapture
  getusermedialocalstreamwidth //= sessionStorage.getItem("getusermedialocalstreamwidth")
  getusermedialocalstreamheight //= sessionStorage.getItem("getusermedialocalstreamheight")
  
  deviceheight:string
  devicewidth:string
  deviceheightLW:string
  deviceheightLH:string
  deviceheightRWN:number
  deviceheightRW:string
  constructor() { }

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
    // this.input = document.querySelector('input[type="range"]');
    this.streamstart()
    
  }

  streamstart()
  {
    this.getusermedialocalstreamwidth = sessionStorage.getItem("getusermedialocalstreamwidth")
    this.getusermedialocalstreamheight = sessionStorage.getItem("getusermedialocalstreamheight")
  
    navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        // optional:[],
        facingMode: 'environment',
        width:  this.getusermedialocalstreamwidth,
        height: this.getusermedialocalstreamheight,
      }
    })
.then(mediaStream => {
  document.querySelector('video').srcObject = mediaStream;

  const track = mediaStream.getVideoTracks()[0];
  // this.imageCapture = new ImageCapture(track);

  return this.imageCapture.getPhotoCapabilities();
})
.then(photoCapabilities => {
  const settings = this.imageCapture.track.getSettings();

  this.input.min = photoCapabilities.imageWidth.min;
  this.input.max = photoCapabilities.imageWidth.max;
  this.input.step = photoCapabilities.imageWidth.step;

  return this.imageCapture.getPhotoSettings();
})
.then(photoSettings => {
  this.input.value = photoSettings.imageWidth;
})
// .catch(error => ChromeSamples.log('Argh!', error.name || error));



document.querySelector('video').addEventListener('play', function() {
  // document.querySelector('#takePhotoButton').disabled = false;
});
  }

   onTakePhotoButtonClick() {
    this.imageCapture.takePhoto({imageWidth: this.input.value})
    .then(blob => createImageBitmap(blob))
    .then(imageBitmap => {
      this.drawCanvas(imageBitmap);
      // ChromeSamples.log(`Photo size is ${imageBitmap.width}x${imageBitmap.height}`);
    })
    // .catch(error => ChromeSamples.log(error));
  }
  canvas 
  drawCanvas(img) {
    this.canvas = document.querySelector('canvas');
    this.canvas.width = getComputedStyle(this.canvas).width.split('px')[0];
    this.canvas.height = getComputedStyle(this.canvas).height.split('px')[0];
    let ratio  = Math.min(this.canvas.width / img.width, this.canvas.height / img.height);
    let x = (this.canvas.width - img.width * ratio) / 2;
    let y = (this.canvas.height - img.height * ratio) / 2;
    this.canvas.getContext('2d').clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height,
        x, y, img.width * ratio, img.height * ratio);
  }




  













}
