import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // Add more form fields as needed
    });
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      return;
    }
    console.log('Submitted');

    // Submit the form data to your Spring Boot backend
    this.http.post('/api/users', this.registrationForm.value).subscribe(
      response => {
        // Handle the response from the backend
        console.log('User registered successfully:', response);
      },
      error => {
        // Handle any errors
        console.error('Error registering user:', error);
      }
    );
  }
}
