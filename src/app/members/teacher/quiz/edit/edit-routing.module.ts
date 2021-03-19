import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPage } from './edit.page';

const routes: Routes = [
  {
    path: '',
    component: EditPage
  },
  // { path: 'home', loadChildren: () => import('../..//home/home.module').then(m => m.HomePageModule) },
  // { path: 'view', loadChildren: () => import('../../quiz/view/view.module').then(m => m.ViewPageModule) },
  // { path: 'add', loadChildren: () => import('../../quiz/add/add.module').then(m => m.AddPageModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPageRoutingModule { }
