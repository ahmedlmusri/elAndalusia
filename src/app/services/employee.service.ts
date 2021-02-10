import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  Employes: any[] = [];
  constructor() { }

  addEmployee(data: object) {
    this.Employes = JSON.parse(localStorage.getItem('employess'));
    this.Employes.push(data);
    localStorage.setItem('employess', JSON.stringify(this.Employes));
  }

  getData() {
    return JSON.parse(localStorage.getItem('employess'));
  }
}
