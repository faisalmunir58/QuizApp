import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MCQlistPage } from './mcqlist.page';

const routes: Routes = [
  {
    path: '',
    component: MCQlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MCQlistPageRoutingModule {}
