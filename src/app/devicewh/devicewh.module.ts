import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevicewhPageRoutingModule } from './devicewh-routing.module';

import { DevicewhPage } from './devicewh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevicewhPageRoutingModule
  ],
  declarations: [DevicewhPage]
})
export class DevicewhPageModule {}
