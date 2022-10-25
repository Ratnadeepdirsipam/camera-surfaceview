import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FramingimgPage } from './framingimg.page';

const routes: Routes = [
  {
    path: '',
    component: FramingimgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FramingimgPageRoutingModule {}
