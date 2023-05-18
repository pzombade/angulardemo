import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeServiceService } from '../employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  empList: Employee[];

  constructor(private empService: EmployeeServiceService, private router: Router){

  }

  ngOnInit(): void {
    this.empService.getEmployees().subscribe({
      next: (response)=>{
        this.empList = response;
      }
    });
  }

  deleteEmployee(id:string){
    console.log('In EmployeeListComponent.deleteEmployee');
    // this.empList = this.empService.getEmployees().filter(emp => emp.id !== id);
    this.empService.deleteEmployee(id).subscribe({
      next: ()=>{
        this.empService.getEmployees().subscribe({
          next: (response)=>{
            this.empList = response;
          }
        });
        console.log(`Deleting employee `,id);
      },
      error: ()=>{
        console.error(`Could not delete `, id);
      }
    });
    
  }

  addNewEmployee(){
    this.router.navigate(['addnewemployee']);
  }
}
