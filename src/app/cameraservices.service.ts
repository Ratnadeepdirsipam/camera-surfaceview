import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CameraservicesService 
{

  getusermedialocalstreamwidth:number
  getusermedialocalstreamheight:number
  datafromstreamtodisplay:string
  fromimagecapturetoimagecapturepreview:string
  stopcamerastream:any

  captureimagewidth
  captureimageheight
  
}
