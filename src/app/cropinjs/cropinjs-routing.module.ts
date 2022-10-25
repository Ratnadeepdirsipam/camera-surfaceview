import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CropinjsPage } from './cropinjs.page';

const routes: Routes = [
  {
    path: '',
    component: CropinjsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CropinjsPageRoutingModule {}
