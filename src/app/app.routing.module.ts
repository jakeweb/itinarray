import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth/auth.guard';
import { AuthGuardSkip } from './shared/auth/auth.guard.skip';
import { MainComponent } from './main/main.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'signup',
        component: SignupComponent,
        canActivate: [AuthGuardSkip]
    },
    {
        path: 'login',
        component: SigninComponent,
        canActivate: [AuthGuardSkip]
    },
    {
        path: 'admin/dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
