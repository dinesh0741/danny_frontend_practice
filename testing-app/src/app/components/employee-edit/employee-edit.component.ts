import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
    selector: 'app-employee-edit',
    imports: [ReactiveFormsModule],
    templateUrl: './employee-edit.component.html',
    styleUrl: './employee-edit.component.scss'
})
export class EmployeeEditComponent implements OnInit {

    public employeeForm : FormGroup
    public employeeId !: number;
    constructor(
        private route : ActivatedRoute,
        private fb : FormBuilder,
        private employeeService: EmployeeService,
        private router: Router
    ) { 
        this.employeeForm = this.fb.group(
            {
                firstName: ['', Validators.required],
                lastName: ['', Validators.required],
                email: ['', Validators.required, Validators.email]
            }
        )
    }

    ngOnInit() : void {
        this.route.params.subscribe({
            next: (params : any) => {
                this.employeeId = params['id'];
            }
        })

        //  OR 
        // this.employeeId = this.route.snapshot.params['id'] -->

        this.loadEmployeeValues();
    }

    public loadEmployeeValues(){
        this.employeeService.getEmployeeById(this.employeeId).subscribe({
            next: (employee : any) => {
                this.employeeForm.patchValue({
                    firstName : employee.firstName,
                    lastName : employee.lastName,
                    email : employee.email
                });
            },
            error: (error) => console.error("Employee Not Found with id " + this.employeeId + " Error: " + error)
        });
    }

    updateEmployee(){
        if(this.employeeForm.invalid){
            return;
        }

        this.employeeService.updateEmployee(this.employeeId, this.employeeForm.value)
        .subscribe({
            next : (employee) => {
                alert("Employee Updated Successfully");
                this.router.navigate(['/']);
            },
            error: (error) => console.error("Error while updating employee with id " + this.employeeId + " Error: " + error)
        });
    }
}

