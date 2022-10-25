import { Component, OnInit } from '@angular/core';
import { CameraservicesService } from '../cameraservices.service';
@Component({
  selector: 'app-devicewh',
  templateUrl: './devicewh.page.html',
  styleUrls: ['./devicewh.page.scss'],
})
export class DevicewhPage implements OnInit {
  imageoutput
  constructor(private cs:CameraservicesService) { }
  sx
  sy
  sw
  sh
  ngOnInit() {

    this.imageoutput = document.getElementById('imgop')
    // this.imageoutput.style.width = window.innerWidth + "px"
    // this.imageoutput.style.height = window.innerHeight + "px"
    this.imageoutput.src = this.cs.fromimagecapturetoimagecapturepreview
    console.log(this.imageoutput)
    console.log(this.cs.captureimagewidth,this.cs.captureimageheight)
    this.sx = window.innerWidth/5
    this.sy = window.innerHeight/4
    this.sw = window.innerWidth - window.innerWidth/5 - window.innerWidth/5
    this.sh = window.innerHeight - window.innerHeight/4 -window.innerHeight/4
    // console.log(this.cs.fromimagecapturetoimagecapturepreview)
  }

  crop()
  {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    console.log(this.imageoutput,this.sx,this.sy,this.sw,this.sh, 0, 0, this.sw,this.sh)
    context.drawImage(this.imageoutput,this.sx,this.sy,this.sw,this.sh, 0, 0, this.sw,this.sh);
    const frame = canvas.toDataURL("image/png");
    this.imageoutput.src = frame
  }
}
