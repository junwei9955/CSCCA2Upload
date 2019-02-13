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
var user_service_1 = require("../shared/user.service");
var core_1 = require("@angular/core");
var ngx_toastr_1 = require("ngx-toastr");
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(userService, toastr) {
        this.userService = userService;
        this.toastr = toastr;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    SignUpComponent.prototype.resolved = function (captchaResponse) {
        console.log("Resolved captcha with response " + captchaResponse + ":");
    };
    SignUpComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.reset();
        this.user = {
            UserName: '',
            Email: '',
            Password: '',
            FullName: '',
            Captcha: null
        };
    };
    SignUpComponent.prototype.OnSubmit = function (form) {
        var _this = this;
        form.value.UserId = "";
        form.value.captcha = "";
        console.log(form.value);
        this.userService.registerUser(form.value)
            .subscribe(function (data) {
            if (data.Succeeded == true) {
                _this.resetForm(form);
                _this.toastr.success('User Registration successful');
            }
            else {
                _this.toastr.error(data.Errors[0]);
            }
        });
    };
    SignUpComponent = __decorate([
        core_1.Component({
            selector: 'app-sign-up',
            templateUrl: './sign-up.component.html',
            styleUrls: ['../sign-in/sign-in.component.css']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, ngx_toastr_1.ToastrService])
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=sign-up.component.js.map