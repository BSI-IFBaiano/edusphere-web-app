import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../../shared/views/login/login.component';
import { LandingPageComponent } from '../../shared/views/landing-page/landing-page/landing-page.component';
import { ForgetPasswordComponent } from '../../shared/views/forget-password/forget-password.component';

export const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: '', component: LandingPageComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
