import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrl: './progress-spinner.component.css'
})
export class ProgressSpinnerComponent {
load=false

clicked=()=>{
  this.load=true

  setTimeout(()=>{
    this.load=false

  },5000
    
)

}
}
