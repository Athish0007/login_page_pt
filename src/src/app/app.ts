import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ Import this
import { CommonModule } from '@angular/common'; // Optional for future needs

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule], // ✅ Add RouterModule here
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
