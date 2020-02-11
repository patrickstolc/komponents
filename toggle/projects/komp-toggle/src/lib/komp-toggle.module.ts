import { NgModule } from '@angular/core';
import { KompToggleComponent } from './komp-toggle.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [KompToggleComponent],
  exports: [KompToggleComponent]
})
export class KompToggleModule { }
