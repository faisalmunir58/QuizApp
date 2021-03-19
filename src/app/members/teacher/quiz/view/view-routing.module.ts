import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPage } from './view.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPage
  },
  // { path: 'home', loadChildren: () => import('../..//home/home.module').then(m => m.HomePageModule) },
  // { path: 'add', loadChildren: () => import('../../quiz/add/add.module').then(m => m.AddPageModule) },
  // { path: 'edit', loadChildren: () => import('../../quiz/edit/edit.module').then(m => m.EditPageModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPageRoutingModule { }
