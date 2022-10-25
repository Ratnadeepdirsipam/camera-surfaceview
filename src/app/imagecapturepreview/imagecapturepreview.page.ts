import { Component, OnInit } from '@angular/core';
import { CameraservicesService } from '../cameraservices.service';
import { get } from 'scriptjs';
// import * as Jcrop from 'jquery-jcrop/js/jquery.min.js';
// import * as $ from 'jquery/dist/jquery.min.js';
// import { JQueryStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';
// import Jcrop from "jcrop";
// declare var $: JQueryStatic;
declare const  Cropper:any
// import { Crop, CropOptions } from '@ionic-native/crop/ngx';
// declare  const deepu:  any;
import { NavController } from '@ionic/angular';


/*!
 * Cropper.js v0.8.1
 * https://github.com/fengyuanchen/cropperjs
 *
 * Copyright (c) 2015-2016 Fengyuan Chen
 * Released under the MIT license
 *
 * Date: 2016-09-03T04:55:16.458Z
 */
@Component({
  selector: 'app-imagecapturepreview',
  templateUrl: './imagecapturepreview.page.html',
  styleUrls: ['./imagecapturepreview.page.scss'],
})
export class ImagecapturepreviewPage implements OnInit {
  // Coopper=Cropper
  preview
  // cropper
  canvas
  result
  img_result
  img_w
  img_h
  options
  save
  cropped
  dwn
  upload
  cropper
  img
  constructor(
    // private crop: Crop,
    private cs:CameraservicesService,
    private nc: NavController
    ) { }
    stylewidth:string
  ngOnInit() {
    // get("assets/javascript/custumimgcapture.js", () => {})
    // get("assets/javascript/bcjs.js", () => {})
    //cropper.min.js
    // console.log(this.cs.fromimagecapturetoimagecapturepreview)
    get("assets/javascript/cropper.min.js", () => {})
    this.stylewidth = window.innerWidth + "px"
    this.result = document.querySelector(".result"),
    this.img_result = document.querySelector(".img-result"),
    this.img_w = document.querySelector(".img-w"),
    this.img_h = document.querySelector(".img-h"),
    this.options = document.querySelector(".options"),
    this.save = document.querySelector(".save"),
    this.cropped = document.querySelector(".cropped"),
    this.dwn = document.querySelector(".download"),
    this.upload = document.querySelector("#file-input"),
    this.cropper = "";
    this.preview = document.getElementById('displayimg')

    // on change show image with crop options
  // this.upload.addEventListener("onload", (e) => {
    // if (e.target.files.length) {
    //   // start file reader
    //   const reader = new FileReader();
    //   reader.onload = (e) => {
    //     if (e.target.result) {
          // create new image
         
      //   }
      // };


    //   reader.readAsDataURL(e.target.files[0]);
    // }
  // });

    // setTimeout(() => {
    //   console.log(this.cs.fromimagecapturetoimagecapturepreview)
    //   this.preview.src = this.cs.fromimagecapturetoimagecapturepreview
    //   try{
    //     // this.cropper = new deepu(this.cs.fromimagecapturetoimagecapturepreview)

    //   }catch(e){console.log(e)}
    //   // console.log(this.cropper)
    // }, 500);
    setTimeout(() => {
      this.activatecropper()
      this.saveimg()
    }, 1000);
  }

activatecropper()
{
  this.img = document.createElement("img");
  this.img.id = "image";
  this.img.src = this.cs.fromimagecapturetoimagecapturepreview
  
  //console.log(img.src)
  // clean result before
  this.result.innerHTML = "";
  // append new image
  this.result.appendChild(this.img);
  // show save btn and options
  this.save.classList.remove("hide");
  //deepu changed
  // this.options.classList.remove("hide");
  // init cropper
  //console.log(img)
  this.cropper = new Cropper(this.img,
    {
      aspectRatio: 1 / 1, // select area ratio 16:9, 4:3, 1:1, 2:3, free
viewMode: 3, // sketch image to fit the container
    });
}

saveimg()
{
  this.save.addEventListener("click", (e) => {
    e.preventDefault();
    // get result to data uri
    let imgSrc = this.cropper
      .getCroppedCanvas({
        width: 300//this.img_w.value, // input value
      })
      .toDataURL();
    // remove hide class of img
    this.cropped.classList.remove("hide");
    this.img_result.classList.remove("hide");
    // show image cropped
    this.cropped.src = imgSrc;
    this.dwn.classList.remove("hide");
    this.dwn.download = "imagename.png";
    this.dwn.setAttribute("href", imgSrc);
  });

}

  img2
  cropanimage()
  {
    this.canvas = document.createElement("canvas");//document.getElementById("myCanvas");
    this.canvas.width = "500"
    this.canvas.height = "500"
    var contex = this.canvas.getContext("2d");  
    // (sx, sy, sw, sh,dx, dy, dw, dh);
    // contex.drawImage(this.preview, 10, 10,500, 175, 0, 0, 100, 175);
    let sx = window.innerWidth/5
    let sy = window.innerWidth/2
    let sw = window.innerWidth - window.innerWidth/5 -window.innerWidth/5
    let sh = window.innerHeight - window.innerHeight/2 - window.innerHeight/2
    console.log(sx,sy,sw,sh)
    contex.drawImage(this.preview,
      500, 500,   // Start at 10 pixels from the left and the top of the image (crop),
      2000, 2000,   // "Get" a `80 * 30` (w * h) area from the source image (crop),
      0, 0,     // Place the result at 0, 0 in the canvas,
      2000, 2000); // With as width / height: 160 * 60 (scale)
    // contex.drawImage(this.preview, 
    //   (this.preview.width - 500) / 2,   // sx, 200 pixels to the left from center
    //   (this.preview.height - 500) / 2,  // sy, 175 pixels above center
    //   400, 350, 0, 0, 400, 350);  // sw, sh, dx, dy, dw, dh
    const ctx = this.canvas.getContext("bitmaprenderer");
    // ctx.transferFromImageBitmap(bitmap);
    const data = this.canvas.toDataURL('image/png');
     this.img2 = document.getElementById('displayimg1')
     this.img2.src = data
    console.log(data)
  }
  
  backtocam()
  {
    // this.cs.stopcamerastream.getVideoTracks().forEach((track) =>{track.stream.start()})
    // this.nc.navigateForward('imagecapture')
    location.href = "imagecapture"
  }

  imageCropMethod(pathImage) {
    // this.crop.crop(pathImage, this.cropOpt)
    //   .then(
    //     newPath => {
    //       this.croppedImg(newPath.split('?')[0])
    //     },
    //     error => {
    //       alert('Error in cropper' + error);
    //     }
    //   );
  }
  croppedImg(pathImage) {
    // this.loading = true;
    var copyUrl = pathImage;
    var splitPath = copyUrl.split('/');
    var imgName = splitPath[splitPath.length - 1];
    var fileUrl = pathImage.split(imgName)[0];
    // this.file.readAsDataURL(fileUrl, imgName).then(base64 => {
    //   this.croppedImgUrl = base64;
    //   this.loading = false;
    // }, error => {
    //   alert(error);
    //   this.loading = false;
    // });
  }

  jjjcrop()
  {
    // $('#target').Jcrop({
    //   onChange: updatePreview,
    //   onSelect: updatePreview,
    //   aspectRatio: xsize / ysize
    // },function(){
    //   // Use the API to get the real image size
    //   var bounds = this.getBounds();
    //   boundx = bounds[0];
    //   boundy = bounds[1];
    //   // Store the API in the jcrop_api variable
    //   jcrop_api = this;

    //   // Move the preview into the jcrop container for css positioning
    //   $preview.appendTo(jcrop_api.ui.holder);
    // });
  }

  // updatePreview(pimg,c,xsize,ysize,boundx,boundy)
  //   {
  //     if (parseInt(c.w) > 0)
  //     {
  //       var rx = xsize / c.w;
  //       var ry = ysize / c.h;

  //       pimg.css({
  //         width: Math.round(rx * boundx) + 'px',
  //         height: Math.round(ry * boundy) + 'px',
  //         marginLeft: '-' + Math.round(rx * c.x) + 'px',
  //         marginTop: '-' + Math.round(ry * c.y) + 'px'
  //       });
  //     }
  //   };

}
