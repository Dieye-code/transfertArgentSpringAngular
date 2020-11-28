import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterLink, RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule
  ],
  exports : [
    HeaderComponent
  ]
})
export class HeaderModule { }
