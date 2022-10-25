import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewimagecapturePageRoutingModule } from './newimagecapture-routing.module';

import { NewimagecapturePage } from './newimagecapture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewimagecapturePageRoutingModule
  ],
  declarations: [NewimagecapturePage]
})
export class NewimagecapturePageModule {}
