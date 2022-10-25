import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JsfiddlePageRoutingModule } from './jsfiddle-routing.module';

import { JsfiddlePage } from './jsfiddle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JsfiddlePageRoutingModule
  ],
  declarations: [JsfiddlePage]
})
export class JsfiddlePageModule {}
