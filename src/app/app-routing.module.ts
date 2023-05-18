import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Employee } from './employee-list/employee';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { DynamicShapeComponent } from './dynamic-shape/dynamic-shape.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmpcrudComponent } from './empcrud/empcrud.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';

const routes: Routes = [
  { path: 'twoway', component: TwoWayBindingComponent },
  { path: 'shape', component: DynamicShapeComponent },
  { path: 'employeelist', component: EmployeeListComponent },
 { path: '', component: LoginComponentComponent},
  { path: 'login', component: LoginComponentComponent},
  { path: 'empcrud/:id', component: EmpcrudComponent},
   { path: 'addnewemployee', component: AddNewEmployeeComponent},
   { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
