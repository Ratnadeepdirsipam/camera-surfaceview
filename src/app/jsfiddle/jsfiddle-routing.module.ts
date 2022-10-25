import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JsfiddlePage } from './jsfiddle.page';

const routes: Routes = [
  {
    path: '',
    component: JsfiddlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JsfiddlePageRoutingModule {}
