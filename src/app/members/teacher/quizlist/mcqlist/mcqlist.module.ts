import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MCQlistPageRoutingModule } from './mcqlist-routing.module';

import { MCQlistPage } from './mcqlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MCQlistPageRoutingModule
  ],
  declarations: [MCQlistPage]
})
export class MCQlistPageModule {}
