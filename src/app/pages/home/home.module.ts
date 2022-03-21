import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from '../main-page/main-page.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { BannerComponent } from './banner/banner.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsUserComponent } from './user-list/details-user/details-user.component';
import { AngularMaterialModule } from 'src/app/configs/angular-material/angular-material.module';

const COMPONENTS = [
  HomeComponent,
  BannerComponent,
  MainPageComponent,
  UserListComponent
]


const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    ...COMPONENTS,
    DetailsUserComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES),
    AngularMaterialModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class HomeModule { }
