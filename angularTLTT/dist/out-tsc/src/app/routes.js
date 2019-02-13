"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var profile_component_1 = require("./profile/profile.component");
var user_component_1 = require("./user/user.component");
var sign_up_component_1 = require("./user/sign-up/sign-up.component");
var sign_in_component_1 = require("./user/sign-in/sign-in.component");
var auth_guard_1 = require("./auth/auth.guard");
var home_component_1 = require("./home/home.component");
var talents_component_1 = require("./talents/talents.component");
var create_component_1 = require("./talents/create/create.component");
var view_component_1 = require("./talents/view/view.component");
var update_component_1 = require("./talents/update/update.component");
exports.appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'update', component: update_component_1.UpdateComponent },
    {
        path: 'create', component: talents_component_1.TalentsComponent,
        children: [{ path: '', component: create_component_1.CreateComponent }]
    },
    {
        path: 'update', component: talents_component_1.TalentsComponent,
        children: [{ path: '', component: update_component_1.UpdateComponent }]
    },
    {
        path: 'view/:id', component: talents_component_1.TalentsComponent,
        children: [{ path: '', component: view_component_1.ViewComponent }]
    },
    {
        path: 'update/:id', component: talents_component_1.TalentsComponent,
        children: [{ path: '', component: update_component_1.UpdateComponent }]
    },
    {
        path: 'signup', component: user_component_1.UserComponent,
        children: [{ path: '', component: sign_up_component_1.SignUpComponent }]
    },
    {
        path: 'signin', component: user_component_1.UserComponent,
        children: [{ path: '', component: sign_in_component_1.SignInComponent }]
    },
    { path: '', redirectTo: '/signin', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map