import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewimagecapturePage } from './newimagecapture.page';

const routes: Routes = [
  {
    path: '',
    component: NewimagecapturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewimagecapturePageRoutingModule {}
