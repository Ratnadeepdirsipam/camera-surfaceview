import { Component, OnInit } from '@angular/core';
import { get } from 'scriptjs';
// declare const html2canvas:any;
// import * as html2canvas from 'html2canvas/dist/html2canvas.min.js'
// import * as Jcrop from 'jquery-jcrop/js/jquery.min.js';
import * as $ from 'jquery/dist/jquery.min.js';
declare const  Cropper:any
//'cropperjs/dist/cropper.js'
@Component({
  selector: 'app-screenshot',
  templateUrl: './screenshot.page.html',
  styleUrls: ['./screenshot.page.scss'],
})
export class ScreenshotPage implements OnInit {
  // file
  // recorte
  // temp
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
    // private h2c:html2canvas
  ) { }

  ngOnInit() {
    get("assets/javascript/cropper.min.js", () => {})

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

  // on change show image with crop options
  this.upload.addEventListener("change", (e) => {
    if (e.target.files.length) {
      // start file reader
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target.result) {
          // create new image
          this.img = document.createElement("img");
          this.img.id = "image";
          this.img.src = e.target.result;
          
          //console.log(img.src)
          // clean result before
          this.result.innerHTML = "";
          // append new image
          this.result.appendChild(this.img);
          // show save btn and options
          this.save.classList.remove("hide");
          this.options.classList.remove("hide");
          // init cropper
          //console.log(img)
          this.cropper = new Cropper(this.img);
        }
      };


      reader.readAsDataURL(e.target.files[0]);
    }
  });

  this.save.addEventListener("click", (e) => {
    e.preventDefault();
    // get result to data uri
    let imgSrc = this.cropper
      .getCroppedCanvas({
        width: this.img_w.value, // input value
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


  // deepucallcropimg(imgsrc,result)
  // {
  //   // create new image
  //   let img = document.createElement("img");
  //   img.id = "image";
  //   img.src = imgsrc//e.target.result;
  //   //console.log(img.src)
  //   // clean result before
  //   result.innerHTML = "";
  //   // append new image
  //   result.appendChild(img);
  //   // show save btn and options
  //   save.classList.remove("hide");
  //   options.classList.remove("hide");
  //   // init cropper
  //   //console.log(img)
  //   cropper = new Cropper(img);
  // }

    // var image = document.getElementById('image');
    // var options = {
    //   aspectRatio: 321 / 180,
    //   preview: '.img-preview',
    //   ready: (e) => {
    //     console.log(e.type);
    //   },
    //   cropstart:(e) => {
    //     console.log(e.type, e.detail.action);
    //   },
    //   cropmove:(e) => {
    //     console.log(e.type, e.detail.action);
    //   },
    //   cropend:(e) => {
    //     console.log(e.type, e.detail.action);
    //   },
    //   crop:(e) => {
    //     var data = e.detail;
  
    //     console.log(e.type);
    //     // dataX.value = Math.round(data.x);
    //     // dataY.value = Math.round(data.y);
    //     // dataHeight.value = Math.round(data.height);
    //     // dataWidth.value = Math.round(data.width);
    //     // dataRotate.value = typeof data.rotate !== 'undefined' ? data.rotate : '';
    //     // dataScaleX.value = typeof data.scaleX !== 'undefined' ? data.scaleX : '';
    //     // dataScaleY.value = typeof data.scaleY !== 'undefined' ? data.scaleY : '';
    //   },
    //   zoom: function(e) {
    //     console.log(e.type, e.detail.ratio);
    //   }
    // };
    // var cropper = new Cropper(image, options);
    // var originalImageURL = image.src;
    // var uploadedImageType = 'image/jpeg';
    // var uploadedImageURL;
    // var cropper = new Cropper(image, {
    //   // aspectRatio: 110 / 3,
    //   aspectRatio:1/1,
    //   strict:true,
    //   background:false,
    //   guides:false,
    //   autoCropArea:0.6,
    //   rotatable:false,
    //   //using these just to stop box collapsing on itself
    //   minCropBoxWidth:50,
    //   minCropBoxHeight:50,
    //   crop: (e) => {
    //     console.log(e.detail.x);
    //     console.log(e.detail.y);
    //     console.log(e.detail.width);
    //     console.log(e.detail.height);
    //     console.log(e.detail.rotate);
    //     console.log(e.detail.scaleX);
    //     console.log(e.detail.scaleY);
    //   }
    // });
    

    }

    
//   camscreenshot()
//   {
//     try{
//       let div =
//       document.getElementById('snap');
//     html2canvas(div).then(
//       (canvas) => {
//         console.log(canvas)
//         document
//         .getElementById('output')
//         .appendChild(canvas);
//       })
//     }catch(e){console.log(e)}

//   }
// ss
// async capture(){
//     const canvas = document.createElement("canvas");
//     const context = canvas.getContext("2d");
//     const video = document.createElement("video");
//     try {
//       //const captureStream = await navigator.mediaDevices.getDisplayMedia();
//       let captureStream = await navigator.mediaDevices.getDisplayMedia({video:true});
//       video.srcObject = captureStream;
//       context.drawImage(video, 0, 0, window.innerWidth, window.innerHeight);
//       const frame = canvas.toDataURL("image/png");
//       captureStream.getTracks().forEach(track => track.stop());
//       this.ss = document.getElementById('displayss')
//       this.ss.src = frame
//       // window.location.href = frame;
//     } catch (err) {
//       console.error("Error: " + err);
//     }
//   };


}
