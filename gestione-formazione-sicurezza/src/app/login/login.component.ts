import { Component } from '@angular/core';
import { FormBuilder, Validators, NgForm, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';


import { FormFieldChecker } from '../common/form-field-checker';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, ReactiveFormsModule, MatProgressBarModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private auhtService: AuthService) { }

  fb = new FormBuilder();

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  fieldChecker = new FormFieldChecker();

  login(): void {
    this.auhtService.login(this.loginForm.value);
  }
}
