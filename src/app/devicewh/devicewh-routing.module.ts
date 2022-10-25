import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevicewhPage } from './devicewh.page';

const routes: Routes = [
  {
    path: '',
    component: DevicewhPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevicewhPageRoutingModule {}
