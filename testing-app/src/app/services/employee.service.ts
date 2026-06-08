import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public api  : string = "http://localhost:8081/api/employees"
  constructor(private http: HttpClient) { }

  getAllEmployees(){
    return this.http.get(`${this.api}`);
  }

  getEmployeeById(id: number){
    return this.http.get(`${this.api}/${id}`);
  }

  addEmployee(employee: Employee){
    return this.http.post(`${this.api}`, employee);
  }

  updateEmployee(id: number, employee: Employee){
    return this.http.put(`${this.api}/${id}`, employee);
  }

  deleteEmployee(id: number){
    return this.http.delete(`${this.api}/${id}`);
  }
}
