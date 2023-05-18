import { Injectable } from '@angular/core';
import { Employee } from './employee-list/employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {


  empList: Employee[];

  constructor(private httpClient: HttpClient){
  }

  getEmployees():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>('http://localhost:3000/emp');
  }

  save(emp: Employee) {
    return this.httpClient.post('http://localhost:3000/emp', emp);
  }

  getEmployee(id:string):Observable<Employee>{
    return this.httpClient.get<Employee>('http://localhost:3000/emp/'+id);
  }

  deleteEmployee(id:string){
    console.log(`# Deleting employee HttpClient`,id);
    return this.httpClient.delete('http://localhost:3000/emp/'+id);
  }

  // constructor() {
  //   this.empList = [];
  //   this.empList.push(new Employee(1,'John1',100000, 'john1.img'));
  //   this.empList.push(new Employee(2,'John2',100000, 'john2.img'));
  //   this.empList.push(new Employee(3,'John3',100000, 'john3.img'));
  //   this.empList.push(new Employee(4,'John4',100000, 'john4.img'));
  //   this.empList.push(new Employee(5,'John5',100000, 'john5.img'));
  // }

  // getEmployees():Employee[]{
  //   return this.empList;
  // }

  // deleteEmployee(id:number){
  //   this.empList = this.empList.filter(emp => emp.id !== id);
  //   console.log(`Deleting employee `,id);
  // }
}
