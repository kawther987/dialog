import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss'],
})
export class SearchUserComponent {
  selectedUser!: User;
  users: User[] = [
    { name: 'مستخدم 1', image: '../../../assets/images/user1.avif' },
    { name: 'مستخدم 2', image: '../../../assets/images/user2.avif' },
    { name: 'مستخدم 3', image: '../../../assets/images/user3.avif' },
    { name: 'مستخدم 4', image: '../../../assets/images/user4.avif' },
    { name: 'مستخدم 5', image: '../../../assets/images/user5.avif' },
    { name: 'مستخدم 6', image: '../../../assets/images/user6.avif' },
    { name: 'مستخدم 7', image: '../../../assets/images/user7.avif' },
    { name: 'مستخدم 8', image: '../../../assets/images/user8.jpg' },
  ];
  filteredUsers: User[] = [];

  searchUsers(event: any): void {
    const query = event.query.toLowerCase();
    this.filteredUsers = this.users.filter((user) =>
      user.name.toLowerCase().includes(query)
    );
  }
}
