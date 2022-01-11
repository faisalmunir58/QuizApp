import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMcqPageRoutingModule } from './add-mcq-routing.module';

import { AddMcqPage } from './add-mcq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMcqPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddMcqPage]
})
export class AddMcqPageModule {}
