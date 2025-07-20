import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './loginpage.html',
  styleUrls: ['./loginpage.css']
})
export class Loginpage {
  username = '';
  password = '';
  showPassword = false;

  handleSignIn(): void {
    console.log('Signin attempted', this.username, this.password);
    alert('Login clicked!');
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
