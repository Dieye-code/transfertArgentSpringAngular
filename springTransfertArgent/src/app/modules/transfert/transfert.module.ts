import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { TransfertRouter } from '../transfert-router';
import { TransfertComponent } from './transfert.component';
import { MatTableModule } from "@angular/material/table";
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    TransfertComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    TransfertRouter,
    MatTableModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    MatFormFieldModule,
  ],
  exports : [
    TransfertComponent
  ]
})
export class TransfertModule { }
