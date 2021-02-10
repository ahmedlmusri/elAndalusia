import { state, style, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { TanslationService } from 'src/app/services/tanslation.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']

})
export class AddEmployeeComponent implements OnInit {
  dataObj: any = {
    name: null,
    date: null,
    code: null,
    department: null,
    gender: null,
  }
  showOverlay: boolean = false;
  state = "normal";
  constructor(private employeService: EmployeeService,
    public translate: TanslationService,
  ) { }

  ngOnInit(): void {

  }

  submitData(form: NgForm) {
    this.employeService.addEmployee(this.dataObj);
    this.showOverlay = true;
    setTimeout(() => {
      this.showOverlay = false;
    }, 1000)
  }
}
