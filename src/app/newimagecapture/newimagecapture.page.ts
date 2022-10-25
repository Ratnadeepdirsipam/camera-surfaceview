import { Component, OnInit } from '@angular/core';
import { get } from 'scriptjs';
declare  var jQuery:  any;
declare  const newimgcapture:  any;

@Component({
  selector: 'app-newimagecapture',
  templateUrl: './newimagecapture.page.html',
  styleUrls: ['./newimagecapture.page.scss'],
})
export class NewimagecapturePage implements OnInit {
  // helm = hello
  imageCapture
  constructor(
    // public anyJs:AnyJs
    ) { }

  ngOnInit() {
    get("assets/javascript/custumimgcapture.js", () => {})
  
  }

  custumjavascript()
  {
    navigator.mediaDevices.getUserMedia({video: true})
  .then((mediaStream) => {
    document.querySelector('video').srcObject = mediaStream;

    const track = mediaStream.getVideoTracks()[0];
    this.imageCapture = newimgcapture(track);
  })
  .catch((error) => console.error(error));
    
  }

}
