import { Component, OnInit } from '@angular/core';
import { CameraservicesService } from '../cameraservices.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-cropcaptureimage',
  templateUrl: './cropcaptureimage.page.html',
  styleUrls: ['./cropcaptureimage.page.scss'],
})
export class CropcaptureimagePage implements OnInit {
  photo
  constructor(private cs:CameraservicesService,private nc:NavController) { }

  ngOnInit() {
    
    this.photo = document.getElementById('photo');
    this.photo.setAttribute('src', this.cs.datafromstreamtodisplay);
  }

  btc()
  {
    // location.href = "cameracapture.html"
    this.nc.navigateForward('cameracapture')
  }

}
