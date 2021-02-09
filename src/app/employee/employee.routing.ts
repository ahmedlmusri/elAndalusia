import { Routes } from "@angular/router";
import {AddEmployeeComponent} from './add-employee/add-employee.component'
import { SearchEmployeeComponent } from "./search-employee/search-employee.component";
export const employeeRoute: Routes =[
    {path:'', component: AddEmployeeComponent},
    {path:'searchEmployee', component: SearchEmployeeComponent}

    
]