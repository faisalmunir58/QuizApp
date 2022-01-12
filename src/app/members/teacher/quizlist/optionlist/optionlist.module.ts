import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionlistPageRoutingModule } from './optionlist-routing.module';

import { OptionlistPage } from './optionlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionlistPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [OptionlistPage]
})
export class OptionlistPageModule {}
