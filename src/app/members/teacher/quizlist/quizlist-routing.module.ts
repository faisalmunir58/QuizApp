import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizlistPage } from './quizlist.page';

const routes: Routes = [
  {
    path: '',
    component: QuizlistPage
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'mcqlist',
    loadChildren: () => import('./mcqlist/mcqlist.module').then( m => m.MCQlistPageModule)
  },
  // {
  //   path: 'optionlist',
  //   loadChildren: () => import('./optionlist/optionlist.module').then( m => m.OptionlistPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizlistPageRoutingModule {}
