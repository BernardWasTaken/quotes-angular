import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './_components/main/main.component';
import { LoginComponent } from './_components/login/login.component';
import { AuthGuard } from './_auth/auth.guard';
import { LoginGuard } from './_auth/login.guard';
import { ProfileComponent } from './_components/profile/profile.component';

const routes: Routes = [
  {path: '', component: MainComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
