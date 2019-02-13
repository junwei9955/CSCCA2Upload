import { NgModule } from '@angular/core';
import { appRoutes } from './routes';
import { UserService } from './user/shared/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './auth/auth.guard';
import { HttpModule } from '@angular/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { UpdateComponent } from './talents/update/update.component';
import { HomeComponent } from './home/home.component';
import { TalentsComponent } from './talents/talents.component';
import { CreateComponent } from './talents/create/create.component';
import { TalentService } from './talents/shared/talent.service';
import { ViewComponent } from './talents/view/view.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    NavbarComponent,
    ProfileComponent,
    UpdateUserComponent,
    HomeComponent,
    TalentsComponent,
    CreateComponent,
    ViewComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    RecaptchaModule.forRoot(),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RecaptchaFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService,TalentService, AuthGuard,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
