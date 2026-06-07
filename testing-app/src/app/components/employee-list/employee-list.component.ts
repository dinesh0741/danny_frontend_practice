
import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-employee-list',
    imports: [ReactiveFormsModule],
    templateUrl: './employee-list.component.html',
    styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent implements OnInit {

   public isLoggedIn: boolean = true; // Example variable for conditional rendering
   public employees: Employee[] = [];

   constructor(private employeeService: EmployeeService,
    private router: Router
   ){
    
   }

   ngOnInit(): void {
    console.log("Hello EMployees");
     this.loadEmployess();
   }

   loadEmployess(){
    this.employeeService.getAllEmployees().subscribe(
      {
        next: (data: any) => this.employees = data,
        error: (error) => console.error("error while fetching the employees")
      }
    );
   }

   deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe({
      next: () => this.loadEmployess(),
      error: (error) => console.error("error while deleting employee") 
    })
   }

   addEmployee(){
    this.router.navigate(['/add']);
   }
}
