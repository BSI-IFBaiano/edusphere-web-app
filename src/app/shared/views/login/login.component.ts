import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ILoginData } from '../../../shared/interfaces/login-data/login-data.interfaces';
import { ButtonComponent } from '../../components/button/button.component';
import { LoginService } from '../../services/login/login.service';
import { ToastrNotificationService } from '../../services/toastr/toastr.service';
import { InputLoginComponent } from '../../../shared/components/input-login/input-login.component';
import { InputPasswordComponent } from '../../../shared/components/input-password/input-password.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonComponent,
    InputPasswordComponent,
    InputLoginComponent,
    ReactiveFormsModule,
    RouterLink,
  ],
  providers: [LoginService, ToastrNotificationService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup<ILoginData>;
  stayConnected: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrNotificationService,
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });

  }

  submit() {
    if (!this.isValidForm()) {
      return;
    }
    if (!this.validatePasswords()) {
      return;
    }
    this.loginUser();
  }

  isValidForm(): any {
    
    if (
      this.loginForm.value.email == '' &&
      this.loginForm.value.password == ''
    ) {
      return false;
    }
    if (this.loginForm.value.email == '') {
      return false;
    }
    if (this.loginForm.value.password == '') {
      return null;
    }
    return true;
  }


  stayConnectedSelected() {
    this.stayConnected = true;
  }

  isPasswordFormatValid(): boolean {
    const password = this.loginForm.value.password;

    const passwordRegex = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}$'
    );

    return passwordRegex.test(password);
  }

  validatePasswords(): boolean {
    if (!this.isPasswordFormatValid()) {
      return false;
    }

    return true;
  }

  loginUser() {

    this.loginService
      .login({
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      }, this.stayConnected)
      .toPromise()
      .then((response) => {

        this.router.navigate(['/home/profile']);
      })
      .catch((error) => {

      });
  }
}
