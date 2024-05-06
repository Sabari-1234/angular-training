



import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


/** @title Form field with error messages */
@Component({
  selector: 'app-email-mat',
  templateUrl: './email-mat.component.html',
  styleUrl: './email-mat.component.css',
  
})
export class EmailMatComponent {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
