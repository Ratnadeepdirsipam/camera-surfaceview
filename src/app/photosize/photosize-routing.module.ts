import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotosizePage } from './photosize.page';

const routes: Routes = [
  {
    path: '',
    component: PhotosizePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotosizePageRoutingModule {}
