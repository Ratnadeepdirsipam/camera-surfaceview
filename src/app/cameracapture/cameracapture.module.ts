import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CameracapturePageRoutingModule } from './cameracapture-routing.module';

import { CameracapturePage } from './cameracapture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CameracapturePageRoutingModule
  ],
  declarations: [CameracapturePage]
})
export class CameracapturePageModule {}
