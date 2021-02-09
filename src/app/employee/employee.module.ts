import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { RouterModule } from '@angular/router';
import {employeeRoute} from './employee.routing'
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared/shared.module';


@NgModule({
  declarations: [AddEmployeeComponent, SearchEmployeeComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(employeeRoute)
  ],
  exports: [
    TranslateModule,
  ]
})
export class EmployeeModule { }
