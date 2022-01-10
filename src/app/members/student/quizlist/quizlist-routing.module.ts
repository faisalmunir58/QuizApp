import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizlistPage } from './quizlist.page';

const routes: Routes = [
  {
    path: '',
    component: QuizlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizlistPageRoutingModule {}
