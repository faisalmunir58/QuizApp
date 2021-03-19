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
      { path: 'view', loadChildren: () => import('./teacher/quiz/view/view.module').then( m => m.ViewPageModule)},
      { path: 'add', loadChildren: () => import('./teacher/quiz/add/add.module').then( m => m.AddPageModule)},
      { path: 'edit', loadChildren: () => import('./teacher/quiz/edit/edit.module').then( m => m.EditPageModule)},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembersPageRoutingModule { }
