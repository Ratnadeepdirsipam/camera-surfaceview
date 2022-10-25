import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImagecapturepreviewPage } from './imagecapturepreview.page';

const routes: Routes = [
  {
    path: '',
    component: ImagecapturepreviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImagecapturepreviewPageRoutingModule {}
