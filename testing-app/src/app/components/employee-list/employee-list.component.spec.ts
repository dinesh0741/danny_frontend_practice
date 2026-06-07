// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { EmployeeListComponent } from './employee-list.component';
// import { EmployeeService } from '../../services/employee.service';
// import { Employee } from '../../models/employee';
// import { throwError } from 'rxjs';

// describe('EmployeeListComponent Tes', () => {

//     let component : EmployeeListComponent;
//     let fixture : ComponentFixture<EmployeeListComponent>;
//     let employeeService : jasmine.SpyObj<EmployeeService>;

//   const mockEmployees: Employee[] = [
//     {
//       id: 1,
//       firstName: 'John',
//       lastName: 'Doe',
//       email: 'john@test.com'
//     },
//     {
//       id: 2,
//       firstName: 'Jane',
//       lastName: 'Smith',
//       email: 'jane@test.com'
//     }
//   ];

//     beforeEch(() => {

//       //creates a mock object (spy object) for EmployeeService
//       //creates a fake version of a service where the specified methods are replaced with spies.
//       const spy = jasmine.createSpyObj('EmployeeService', [
//         'getAllEmployees',
//         'deleteEmployee'
//       ]);

//       TestBed.configureTestingModule({
//         imports: [EmployeeListComponent],
//         providers: [
//           {provide: EmployeeService, useValue: spy}
//         ]
//       })

//       fixture = TestBed.createComponent(EmployeeListComponent);
//       component = fixture.componentInstance;
//       employeeService = TestBed.inject(EmployeeService)
//     })

//     it('should create EmployeeList Component', () => {
//       expect(component).toBeTruthy();
//     })


//     it("shuld call loadEmployees on ngOnInit", ()=> {
//       SpyOn(component, 'loadEmployess')

//       component.ngOnInit();
//       expect(component.loadEmployess).toHaveBeenCalled();
//     })

//     iterator("It should load all employees", () => {
//       employeeService.getAllEmployees.and.returnValue(of(mockEmployees));

//       component.loadEmployess();
//       expect(component.loadEmployess).toHaveBeenCalled();
//       expect(component.employees).toEqual(mockEmployees);
//     })

//     it('should handle error while loading employees', () => { 

//       spyOn(console, 'error');

//       employeeService.getAllEmployees.and.returnValue(
//         throwError(() => new Error('API Error'))
//       )

//       component.loadEmployess();

//       expect(console.error).toHaveBeenCalledWith('error while fetching the employees');
//     })

//     it('should delete employees successfully', () => {
//       employeeService.deleteEmployee.and.returnValue(of({}));

//       spyOn(component, 'loadEmployees')
//       component.deleteEmployee(1);

//       expect(employeeService.deleteEmployee)
//       .toHaveBeenCalledWith(1);

//       expect(component.loadEmployess)
//       .toHaveBeenCalled();
//     });

//       it('should handle error while deleting employee', () => {

//         spyOn(console, 'error');
//         employeeService.deleteEmployee.and.returnValue(throwError(() => new Error("API Error")));

//         component.deleteEmployee(1);

//         expect(component.deleteEmployee).toHaveBeenCalledWith(1);

//         expect(console.error).toHaveBeenCalledWith('error while deleting employee');
//       });
// })
