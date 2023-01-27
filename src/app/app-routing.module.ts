import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from '@app/code/entry/entry.component';
import { SingUpComponent } from '@app/code/sing-up/sing-up.component';
const routes: Routes = [
  {
    path: '',
    component:EntryComponent
  },
  { path: 'register-user', component: SingUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
