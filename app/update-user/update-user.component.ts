import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  users: any[] = []; // Array to store the fetched users

  constructor(private http: HttpClient) {}

  fetchUsers() {
    // Make an HTTP GET request to retrieve the list of users
    // Example: this.http.get('/api/users').subscribe(
    //   users => {
    //     this.users = users; // Assign the fetched users to the component property
    //   },
    //   error => {
    //     // Handle any errors
    //   }
    // );

    // For demonstration purposes, assign dummy data to the users array
    this.users = [
      { id: 1, firstName: 'John', lastName: 'Doe' },
      { id: 2, firstName: 'Jane', lastName: 'Smith' },
      // Add more user objects as needed
    ];
  }
}
