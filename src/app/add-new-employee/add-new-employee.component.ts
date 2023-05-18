import { Component } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Employee } from '../employee-list/employee';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.css']
})
export class AddNewEmployeeComponent {
  name: string ="";
  salary: number;
  img: string ="";

  constructor(private empService: EmployeeServiceService){

  }

  save(){
    
    const emp: Employee = {
      id: uuidv4(),
      name: this.name,
      salary: this.salary,
      img: this.img
    };
    console.log(`Emp :`,emp);
    this.empService.save(emp).subscribe(()=>{
      console.log(`Emp saved!`);
    });
  }
}
