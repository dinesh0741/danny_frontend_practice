// import { TestBed } from '@angular/core/testing';

// import { EmployeeService } from './employee.service';
// import { HttpClientTestingModule, HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
// import { Employee } from '../models/employee';
// import { provideHttpClient } from '@angular/common/http';

// describe('EmployeeService', () => {
//     let service: EmployeeService;
//     let httpMock : HttpTestingController;
   
//     const mockEmployees: Employee[] = [
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
    
//     beforeEach(() => {
//       TestBed.configureTestingModule({
//         imports: [EmployeeService,
//         provideHttpClient(),
//         provideHttpClientTesting()
// ]
//       });

//       service = TestBed.inject(EmployeeService);
//       httpMock = TestBed.inject(HttpTestingController);

//     afterEach(() => {
//       httpMock.verify();
//     });

//   it('should get all employees', () => {
//     service.getAllEmployees().subscribe((response: any) => {
      
//       expect(response.length).toBe(2);
//       expect(response).toEqual(mockEmployees);
//     });
//     const req = httpMock.expectOne(
//       'https://localhost:8080/api/employees'
//     );

//     expect(req.request.method).toBe('GET');
//     req.flush(mockEmployees);
//   });

//   it('should get employee by id', () => {

//     const employee = mockEmployees[0];
//     service.getEmployeeById(1).subscribe((response: any) => {
//       expect(response).toEqual(employee);
//     });
//     const req = httpMock.expectOne(
//       'https://localhost:8080/api/employees/1'
//     );
//     expect(req.request.method).toBe('GET');
//     req.flush(employee);
//   });

//   it('should add employee', () => {
//     const newEmployee: Employee = {
//       id: 3,
//       firstName: 'Mike',
//       lastName: 'Ross',
//       email: 'mike@test.com'
//     };

//     service.addEmployee(newEmployee).subscribe((response: any) => {
//       expect(response).toEqual(newEmployee);
//     });

//     const req = httpMock.expectOne(
//       'https://localhost:8080/api/employees'
//     );

//     expect(req.request.method).toBe('POST');
//     expect(req.request.body).toEqual(newEmployee);

//     req.flush(newEmployee);
//   });

//   it('should update employee', () => {

//     const updatedEmployee: Employee = {
//       id: 1,
//       firstName: 'John Updated',
//       lastName: 'Doe',
//       email: 'john.updated@test.com'
//     };

//     service.updateEmployee(1, updatedEmployee)
//       .subscribe((response: any) => {
//         expect(response).toEqual(updatedEmployee);
//       });

//     const req = httpMock.expectOne(
//       'https://localhost:8080/api/employees/1'
//     );

//     expect(req.request.method).toBe('PUT');
//     expect(req.request.body).toEqual(updatedEmployee);

//     req.flush(updatedEmployee);
//   });

//   it('should delete employee', () => {

//     service.deleteEmployee(1).subscribe((response) => {
//       expect(response).toBeTruthy();
//     });

//     const req = httpMock.expectOne(
//       'https://localhost:8080/api/employees/1'
//     );
//     expect(req.request.method).toBe('DELETE');
//     req.flush({});
//   });

//   it('should handle get employee by id error', () => {

//     service.getEmployeeById(999).subscribe({
//       next: () => fail('Expected error'),
//       error: (error) => {
//         expect(error.status).toBe(404);
//       }
//     });

//     const req = httpMock.expectOne(
//       'https://localhost:8080/api/employees/999'
//     );

//     req.flush('Employee Not Found',
//       {
//         status: 404,
//         statusText: 'Not Found'
//       }
//     );
//   });

// });
