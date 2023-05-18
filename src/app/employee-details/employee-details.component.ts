import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../employee-list/employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit{
  @Input() employee: Employee;
  @Output() deleteEmployee: EventEmitter<string>;

  constructor(private ar: ActivatedRoute, private empService: EmployeeServiceService){
    this.deleteEmployee = new EventEmitter();
  }

  delete(id:string){
    console.log('In EmployeeDetailsComponent');
    this.deleteEmployee.emit(id);
  }

  ngOnInit(): void {
    // console.log('id '+this.ar.snapshot.paramMap.get('id'));
  }
}
