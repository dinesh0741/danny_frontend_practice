import { Component, Input, output } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

  //Child to Parent data pass
  @Input() message : string = "";
  employeeSelected : string = "";




  //Two way parent to child communication
  counter = 0;

  constructor(){

  }

  processMoveToParent(employee: any){
    this.employeeSelected = employee;
  }

  public employeeName: string = ""; 

  onSelected(employeeselectedName: any){
    this.employeeSelected = employeeselectedName;
  }

}
