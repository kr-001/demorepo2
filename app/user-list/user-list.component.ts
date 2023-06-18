import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(
      (response: any[]) => {
        this.users = response;
      },
      (error: any) => {
        console.error('Error loading users:', error);
      }
    );
  }

  editUser(userId: number) {
    this.userService.getUserById(userId).subscribe(
      (user: any) => {
        // Redirect to the update user page with the selected user ID
        // Example: this.router.navigate(['/update-user', userId]);
      },
      (error: any) => {
        console.error('Error loading user:', error);
      }
    );
  }

// Assume you have a method to refresh the user list
  refreshUserList() {
    this.loadUsers(); // Call the loadUsers method again to fetch the updated list
  }

// In the update user component, after updating the user
  updateUser() {
    // Call the update user API

    // Once the update is successful
    this.refreshUserList(); // Refresh the user list
  }
  deleteUser(userId: number) {
    this.userService.deleteUser(userId).subscribe(
      () => {
        console.log('User deleted successfully');
        // Refresh the user list or perform any other necessary actions
      },
      (error: any) => {
        console.error('Error deleting user:', error);
      }
    );
  }
}
