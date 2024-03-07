import { Component } from '@angular/core';
import {AuthComponent} from "../auth/auth.component";
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AuthComponent,
    HomeComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
