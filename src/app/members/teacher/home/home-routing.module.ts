import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  { path: 'view', loadChildren: () => import('../quiz/view/view.module').then(m => m.ViewPageModule) },
  { path: 'add', loadChildren: () => import('../quiz/add/add.module').then(m => m.AddPageModule) },
  { path: 'edit', loadChildren: () => import('../quiz/edit/edit.module').then(m => m.EditPageModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
