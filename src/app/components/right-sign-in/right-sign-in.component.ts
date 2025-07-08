import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-right-sign-in',
  standalone: true,
  templateUrl: './right-sign-in.component.html',
  styleUrls: ['./right-sign-in.component.css'],
  imports: [FormsModule, CommonModule]
})
export class RightSignInComponent {
  username: string = '';
  password: string = '';
  showPassword: boolean = false;

  handleSignIn(): void {
    console.log('Sign-in attempt:', {
      username: this.username,
      password: this.password
    });
    // Implement actual login logic here
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
