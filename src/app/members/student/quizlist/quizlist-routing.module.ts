import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizlistPage } from './quizlist.page';

const routes: Routes = [
  {
    path: '',
    component: QuizlistPage
  },
  {
    path: 'mcqlists',
    loadChildren: () => import('./mcqlist/mcqlist.module').then( m => m.MCQlistPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizlistPageRoutingModule {}
