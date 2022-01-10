import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MCQlistPage } from './mcqlist.page';

const routes: Routes = [
  {
    path: '',
    component: MCQlistPage
  },
  {
    path: 'edit-mcq/:myid',
    loadChildren: () => import('../MCQlist/edit-mcq/edit-mcq.module').then( m => m.EditMcqPageModule)
  },
  {
    path: 'add-mcq',
    loadChildren: () => import('../MCQlist/add-mcq/add-mcq.module').then( m => m.AddMcqPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MCQlistPageRoutingModule {}
