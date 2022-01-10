import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditMcqPage } from './edit-mcq.page';

const routes: Routes = [
  {
    path: '',
    component: EditMcqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditMcqPageRoutingModule {}
