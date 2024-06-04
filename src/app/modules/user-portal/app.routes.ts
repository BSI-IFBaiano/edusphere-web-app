import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../../shared/views/login/login.component';
import { LandingPageComponent } from '../../shared/views/landing-page/landing-page/landing-page.component';


export const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: '', component: LandingPageComponent }
 
];
