import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AuthComponent} from "./auth/auth.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

export const routes: Routes = [
  {
    // http://localhost:4200/home
    path: 'home', component : HomeComponent,
  },
  {
    // http://localhost:4200/auth
    path: "auth", component : AuthComponent,
  },
  {
    path: "admin", component : DashboardComponent,
  },
  {
    path: "", redirectTo: "admin", pathMatch: "full",
  }

];
