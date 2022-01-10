import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MCQlistPageRoutingModule } from './mcqlist-routing.module';

import { MCQlistPage } from './mcqlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MCQlistPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MCQlistPage]
})
export class MCQlistPageModule {}
