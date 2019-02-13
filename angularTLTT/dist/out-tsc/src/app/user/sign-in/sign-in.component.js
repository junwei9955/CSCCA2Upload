"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../shared/user.service");
var router_1 = require("@angular/router");
var ngx_toastr_1 = require("ngx-toastr");
var SignInComponent = /** @class */ (function () {
    function SignInComponent(userService, router, toastr) {
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        this.isLoginError = false;
    }
    SignInComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('userToken')) {
            this.router.navigate(['/profile']);
        }
    };
    SignInComponent.prototype.OnSubmit = function (userName, password) {
        var _this = this;
        this.userService.userAuthentication(userName, password).subscribe(function (data) {
            localStorage.setItem('userToken', data.access_token);
            _this.toastr.success("Sign In successful");
            _this.router.navigate(['/profile']);
        }, function (err) {
            _this.toastr.success("Sign in failed");
            _this.isLoginError = true;
        });
    };
    SignInComponent = __decorate([
        core_1.Component({
            selector: 'app-sign-in',
            templateUrl: './sign-in.component.html',
            styleUrls: ['./sign-in.component.css']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router, ngx_toastr_1.ToastrService])
    ], SignInComponent);
    return SignInComponent;
}());
exports.SignInComponent = SignInComponent;
//# sourceMappingURL=sign-in.component.js.map