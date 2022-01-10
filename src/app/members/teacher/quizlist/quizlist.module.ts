import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizlistPageRoutingModule } from './quizlist-routing.module';

import { QuizlistPage } from './quizlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizlistPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [QuizlistPage]
})
export class QuizlistPageModule {}
