import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  Employes:any = [];
  resetFilter = new Subject();
  constructor() { }

  addEmployee(data: object){
   this.Employes = JSON.parse(localStorage.getItem('employess'))
    this.Employes.push(data);
    localStorage.setItem('employess',JSON.stringify(this.Employes));
    console.log(this.Employes)

  }

  getData(){
    return localStorage.getItem('employess');
  }
}
