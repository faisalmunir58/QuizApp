import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembersPage } from './members.page';

const routes: Routes = [
  {
    path: '',
    component: MembersPage,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('./teacher/home/home.module').then( m => m.HomePageModule)},
      //{ path: 'add', loadChildren: () => import('./teacher/quiz/add/add.module').then( m => m.AddPageModule)},
    ]
  },  {
    path: 'quizlist',
    loadChildren: () => import('./student/quizlist/quizlist.module').then( m => m.QuizlistPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembersPageRoutingModule { }
