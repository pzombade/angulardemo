import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FormsModule } from '@angular/forms';
import { DynamicShapeComponent } from './dynamic-shape/dynamic-shape.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpcrudComponent } from './empcrud/empcrud.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    EmployeeListComponent,
    DynamicShapeComponent,
    TwoWayBindingComponent,
    PageNotFoundComponent,
    EmployeeDetailsComponent,
    EmpcrudComponent,
    AddNewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
