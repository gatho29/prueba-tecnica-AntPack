import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

const COMPONENTS = [
  MatDialogModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class AngularMaterialModule { }
