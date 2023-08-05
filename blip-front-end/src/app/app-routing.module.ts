import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import home component
import { HomeComponent } from './home/home.component';
// import login component
import { LoginComponent } from './login/login.component';
// import dashboar component
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  // set default route
  { path: '', component: HomeComponent },
  // set login route
  { path: 'login', component: LoginComponent },
  // set dashboard route
  { path: 'dashboard', component: DashboardComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
