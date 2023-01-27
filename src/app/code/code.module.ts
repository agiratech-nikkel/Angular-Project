import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { EntryComponent } from './entry/entry.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from "@app/shared/shared.module";

@NgModule({
  declarations: [
    EntryComponent,
    SingUpComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule,],
  exports: [],

})
export class CoreModule { }