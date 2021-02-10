import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { TanslationService } from 'src/app/services/tanslation.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.scss']
})
export class SearchEmployeeComponent implements OnInit {
  @ViewChild('searchEmploye', { static: true }) searchEmploye: NgForm;

  employees: any[] = [];
  isSelectAll: boolean = false;
  constructor(private employeeService: EmployeeService,
    private translate: TanslationService) { }

  ngOnInit(): void {
    this.employees = this.employeeService.getData();
  }

  submitData(form: NgForm) {
    let employeeFilter = this.employeeService.getData();
    this.employees = employeeFilter.filter(employee => form.value.name == employee['name'] || form.value.department == employee['department']);
  }

  selectAll() {
    this.isSelectAll = !this.isSelectAll;
    this.employees.map(item => {
      item['Selected'] = this.isSelectAll
    });
  }

  resetForm() {
    this.searchEmploye.reset();
    this.employees = this.employeeService.getData();

  }
}
