import {Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  // '?' in acest caz reprezinta null operator, permite ca variabila sa fie initializata mai tarziu
  // atunci cand folosim '?', variabila cand este apelata trebuie sa fie urmata de '!', care semnifica ca NU este null
  authForm?: FormGroup;
  viewType: string = "login";

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    // exemplu de initializare obiect gol
    // this.authForm = this.formBuilder.group({});
    this.onSetViewType('login');
  }


  onRegister(): void {
    if (this.authForm!.valid) {
      console.log(this.authForm!.value);
      const body = this.authForm!.value;
      this.authService.register(body).subscribe((response: any) => {
        console.log(response);
      })
    } else {
      alert("Formular invalid");
    }
  }

  onSetViewType(viewType: string): void {
    console.log(viewType);
    this.viewType = viewType;

    switch (this.viewType) {
      case 'login' :
        this.authForm = this.formBuilder.group({
          email: ["", Validators.required],
          password: ["", Validators.required],
        });
        break;
      case 'register':
        this.authForm = this.formBuilder.group({
          username: ["", Validators.required],
          email: ["", Validators.required],
          password: ["", Validators.required],
          confirmPassword: ["", Validators.required]
        });
        break;
    }
  }

  onLogin(): void {
    if (this.authForm!.valid) {
      console.log(this.authForm!.value);

      const body = this.authForm!.value;
      let request = this.authService.login(body);

      request.subscribe((response: any) => {
        console.log(response)
        this.router.navigate(["/", "home"])
      });

    } else {
      alert("Formular invalid");
    }
  }


}
