import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImagecapturePage } from './imagecapture.page';

const routes: Routes = [
  {
    path: '',
    component: ImagecapturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImagecapturePageRoutingModule {}
