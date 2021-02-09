import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsModule } from './contact-us/contact-us.module';
import { DashbaordModule } from './dashbaord/dashbaord.module';
import { EmployeeModule } from './employee/employee.module';
const routes: Routes = [
  {
    path: 'employee',
    loadChildren: './employee/employee.module#EmployeeModule',
  },
  {
    path: 'contact-us',
    loadChildren: './contact-us/contact-us.module#ContactUsModule',
  },
  {
    path: '',
    loadChildren: './dashbaord/dashbaord.module#DashbaordModule',    
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
