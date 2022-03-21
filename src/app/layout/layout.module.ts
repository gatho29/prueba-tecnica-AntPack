import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';

const COMPONENTS = [
  TopbarComponent,
  FooterComponent
]

const ROUTES: Routes = [
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports:[
    ...COMPONENTS
  ]
})
export class LayoutModule { }
