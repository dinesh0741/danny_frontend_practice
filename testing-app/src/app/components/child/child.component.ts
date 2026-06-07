import { Component, computed, effect, EventEmitter, input, Input, output, Output, signal } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

    //Accepting data from parent to child
    @Input() employeeName: string = '';

    @Output() message : EventEmitter<String> = new EventEmitter();

    moveToParent(event: any){
      this.message.emit("Dinesh Sharma is coder")
    }
    

    //Two way parent to child communication
    @Output() countChange = new EventEmitter<number>();
    @Input() count = 0;

    increment() {
      this.count++;
      this.countChange.emit(this.count);
    }

    public employeeNameSignal = input<string>();

    public employeeSelectedSignal = output<string>();

    sendSignal(){
      this.employeeSelectedSignal.emit(this.employeeNameSignal()!);
    }

    //signal Example 
    public countSignal = signal(0);

    incrementSignal(){
      this.countSignal.update(val => val + 1);
      //or we can use set method to update the signal value
      // this.countSignal.set(this.countSignal() + 1);
    }


    public single = signal(0);

    //computed signal derives its value from other signals.
    // When single changes, double is recalculated automatically.
    public double = computed(() => this.single() * 2);

    incremenSingletSignal(){
      this.single.update(val => val + 1);
      //or we can use set method to update the signal value
      // this.countSignal.set(this.single() + 1);
    }

    constructor(){
      //An effect runs whenever a signal changes.
      effect(() => {
      console.log(
        'Count changed:',
        this.single()
      );
    });
    }


 
}
