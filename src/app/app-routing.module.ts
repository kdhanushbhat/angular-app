import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemFormComponent } from './Components/item-form/item-form.component';
import { ItemsComponent } from './Components/items/items.component';
import { JobsComponent } from './Components/jobs/jobs.component';

const routes: Routes = [
  { path: '', component: ItemFormComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'jobs', component: JobsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
