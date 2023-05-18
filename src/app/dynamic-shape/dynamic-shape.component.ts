import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-shape',
  templateUrl: './dynamic-shape.component.html',
  styleUrls: ['./dynamic-shape.component.css']
})
export class DynamicShapeComponent {
  showBox: boolean = true;

  toggleShape(): void{
    this.showBox = !this.showBox; 
  }
}
