import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPage } from './add.page';

const routes: Routes = [
  {
    path: '',
    component: AddPage
  },
  //  { path: 'home', loadChildren: () => import('../..//home/home.module').then(m => m.HomePageModule) },
  //  { path: 'view', loadChildren: () => import('../../quiz/view/view.module').then(m => m.ViewPageModule) },
  //  { path: 'edit', loadChildren: () => import('../../quiz/edit/edit.module').then(m => m.EditPageModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPageRoutingModule { }
