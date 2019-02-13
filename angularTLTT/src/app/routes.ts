import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { Routes } from '@angular/router'
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { HomeComponent } from './home/home.component';
import { TalentsComponent } from './talents/talents.component';
import { CreateComponent } from './talents/create/create.component';
import { ViewComponent } from './talents/view/view.component';
import { UpdateComponent } from './talents/update/update.component';

export const appRoutes: Routes = [
    { path : 'home', component: HomeComponent},
    { path : 'profile', component: ProfileComponent,canActivate:[AuthGuard]},
    { path : 'update', component: UpdateComponent},
    { 
        path : 'create', component: TalentsComponent,
        children: [{path: '', component: CreateComponent}]
    },
    { 
        path : 'update', component: TalentsComponent,
        children: [{path: '', component: UpdateComponent}]
    },
    { 
        path : 'view/:id', component: TalentsComponent,
        children: [{path: '', component: ViewComponent}]
    },
    { 
        path : 'update/:id', component: TalentsComponent,
        children: [{path: '', component: UpdateComponent}]
    },
    { 
        path: 'signup', component: UserComponent, 
        children: [{ path: '', component: SignUpComponent }] 
    },
    { 
        path: 'signin', component: UserComponent, 
        children: [{ path: '', component: SignInComponent }] 
    },
    { path : '', redirectTo:'/signin', pathMatch: 'full'}
];