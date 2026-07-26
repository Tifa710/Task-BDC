import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { users } from '../../DummyUser/dummyuser';
import { User } from '../../DummyUser/usermodel';

@Component({
  selector: 'app-admin',
  imports: [FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class AdminComponent {
  users = users;

  roles = ['admin', 'teamleader', 'member'];

  selectedUser!: User;
  selectedRole: User['role'] = 'teammember';

  save() {
    if (this.selectedUser) {
      this.selectedUser.role = this.selectedRole;
      console.log(this.selectedUser);
      alert('user Updated');
    }
  }
}
