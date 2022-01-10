import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditMcqPageRoutingModule } from './edit-mcq-routing.module';

import { EditMcqPage } from './edit-mcq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditMcqPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditMcqPage]
})
export class EditMcqPageModule {}
