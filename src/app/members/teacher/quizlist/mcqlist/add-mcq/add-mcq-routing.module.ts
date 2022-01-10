import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMcqPage } from './add-mcq.page';

const routes: Routes = [
  {
    path: '',
    component: AddMcqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMcqPageRoutingModule {}
