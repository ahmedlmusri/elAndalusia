import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { dashboardRoute } from './dashbaord.routing';
import { SharedModule } from '../shared/shared/shared.module';



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(dashboardRoute)
  ]
})
export class DashbaordModule { }
