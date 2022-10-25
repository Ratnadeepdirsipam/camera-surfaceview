import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cropinjs',
  templateUrl: './cropinjs.page.html',
  styleUrls: ['./cropinjs.page.scss'],
})
export class CropinjsPage implements OnInit {
  canvas
  image
  imagepreview
  bsf:string = ""
   constructor() { }

  ngOnInit() {
    // this.imagepreview = document.getElementById('thisimagepreview')
    this.image = document.getElementById('myImage')
    setTimeout(() => {
      this.image.src = "https://media.geeksforgeeks.org/wp-content/uploads/20200615165012/double_quotes.jpg"
      // this.image.src = this.bsf
    }, 500);
  }

  /*
  img	Specifies the image, canvas, or video element to use	 
  sx	Optional. The x coordinate where to start clipping	
  sy	Optional. The y coordinate where to start clipping	
  swidth	Optional. The width of the clipped image	
  sheight	Optional. The height of the clipped image	
  x	The x coordinate where to place the image on the canvas	
  y	The y coordinate where to place the image on the canvas	
  width	Optional. The width of the image to use (stretch or reduce the image)	
  height	Optional. The height of the image to use (stretch or reduce the image)
  */
  cropImage(img,sx,sy,swidth,sheight,x,y,width,height) {
    this.canvas = document.getElementById("myCanvas");
    var contex = this.canvas.getContext("2d");
    // var img = document.getElementById("myImage");
    
    // contex.drawImage(img, 10, 10,200, 175, 0, 0, 100, 175);
    contex.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
    // const ctx = this.canvas.getContext("bitmaprenderer");
    // // ctx.transferFromImageBitmap(bitmap);
    // const data = this.canvas.toDataURL('image/png');
    // this.imagepreview.src= data
    // console.log(data)
  }

  cropanimage(sx,sy,swidth,sheight,x,y,width,height)
  {
    let img = this.image
    // this.cropImage(this.image,sx,sy,swidth,sheight,x,y,width,height)
    this.cropImage(img, 
      (img.width - 425) / 2,   // sx, 200 pixels to the left from center
      (img.height - 882) / 2,  // sy, 175 pixels above center
      400, 350, 0, 0, 400, 350);  // sw, sh, dx, dy, dw, dh

  }
  

}
