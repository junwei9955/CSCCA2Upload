"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var routes_1 = require("./routes");
var user_service_1 = require("./user/shared/user.service");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var user_component_1 = require("./user/user.component");
var sign_in_component_1 = require("./user/sign-in/sign-in.component");
var sign_up_component_1 = require("./user/sign-up/sign-up.component");
var navbar_component_1 = require("./navbar/navbar.component");
var profile_component_1 = require("./profile/profile.component");
var http_1 = require("@angular/common/http");
var ngx_toastr_1 = require("ngx-toastr");
var animations_1 = require("@angular/platform-browser/animations");
var auth_guard_1 = require("./auth/auth.guard");
var http_2 = require("@angular/http");
var auth_interceptor_1 = require("./auth/auth.interceptor");
var update_user_component_1 = require("./user/update-user/update-user.component");
var update_component_1 = require("./talents/update/update.component");
var home_component_1 = require("./home/home.component");
var talents_component_1 = require("./talents/talents.component");
var create_component_1 = require("./talents/create/create.component");
var talent_service_1 = require("./talents/shared/talent.service");
var view_component_1 = require("./talents/view/view.component");
var ng_recaptcha_1 = require("ng-recaptcha");
var forms_2 = require("ng-recaptcha/forms");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                user_component_1.UserComponent,
                sign_in_component_1.SignInComponent,
                sign_up_component_1.SignUpComponent,
                navbar_component_1.NavbarComponent,
                profile_component_1.ProfileComponent,
                update_user_component_1.UpdateUserComponent,
                home_component_1.HomeComponent,
                talents_component_1.TalentsComponent,
                create_component_1.CreateComponent,
                view_component_1.ViewComponent,
                update_component_1.UpdateComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                http_2.HttpModule,
                ng_recaptcha_1.RecaptchaModule.forRoot(),
                ngx_toastr_1.ToastrModule.forRoot(),
                animations_1.BrowserAnimationsModule,
                forms_2.RecaptchaFormsModule,
                router_1.RouterModule.forRoot(routes_1.appRoutes)
            ],
            providers: [user_service_1.UserService, talent_service_1.TalentService, auth_guard_1.AuthGuard,
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: auth_interceptor_1.AuthInterceptor,
                    multi: true
                }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map