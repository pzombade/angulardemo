import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
import { Employee } from '../employee-list/employee';

@Component({
  selector: 'app-empcrud',
  templateUrl: './empcrud.component.html',
  styleUrls: ['./empcrud.component.css']
})
export class EmpcrudComponent implements OnInit {
  employee: Employee;
  constructor(private ar: ActivatedRoute, private empService : EmployeeServiceService){
   
  }

  ngOnInit(): void {
    const id = this.ar.snapshot.params["id"];
    console.log(`EmpcrudComponent for ngOnInit `,this.ar.snapshot.params["id"]);
    this.empService.getEmployee(id).subscribe({
      next:(response)=>{
        this.employee = response;
      }
    });
  }
}
