import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTabComponent } from './new-tab/new-tab.component'

const routes: Routes = [
  { path: '', redirectTo:'/new_tab', pathMatch: 'full' },
  { path: 'new_tab', component: NewTabComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
