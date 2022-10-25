import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CameracapturePage } from './cameracapture.page';

const routes: Routes = [
  {
    path: '',
    component: CameracapturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CameracapturePageRoutingModule {}
