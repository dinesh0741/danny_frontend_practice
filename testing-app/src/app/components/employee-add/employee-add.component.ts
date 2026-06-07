import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-employee-add',
    imports: [ReactiveFormsModule],
    templateUrl: './employee-add.component.html',
    styleUrl: './employee-add.component.scss'
})
export class EmployeeAddComponent implements OnInit{
  employeeForm: FormGroup;
  constructor(
    private fb : FormBuilder, 
    private employeeService: EmployeeService,
    private router: ActivatedRoute, 
    private route: Router
  ){
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    
  }


  addEmployee(){
    if(this.employeeForm.valid){
      this.employeeService.addEmployee(this.employeeForm.value).subscribe();
    }
   }

}
