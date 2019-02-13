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
var router_1 = require("@angular/router");
var UpdateUserComponent = /** @class */ (function () {
    function UpdateUserComponent(router, userService, toastr) {
        this.router = router;
        this.userService = userService;
        this.toastr = toastr;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    }
    UpdateUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetForm();
        this.userService.getUserClaims().subscribe(function (data) {
            _this.userClaims = data;
        });
    };
    UpdateUserComponent.prototype.resetForm = function (form) {
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
    UpdateUserComponent.prototype.OnSubmit = function (form) {
        console.log(form.value);
        console.log(this.userClaims);
        console.log(form.value);
        // this.userService.updateUser(form.value).subscribe((data:any)=>{
        //   if(data.Succeeded == true){
        //     this.toastr.success("User update successful");
        //   }
        //   else{
        //     this.toastr.error(data.Errors[0]);
        //   }
        // })
    };
    UpdateUserComponent = __decorate([
        core_1.Component({
            selector: 'app-update',
            templateUrl: './update-user.component.html',
            styleUrls: ['./update-user.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService, ngx_toastr_1.ToastrService])
    ], UpdateUserComponent);
    return UpdateUserComponent;
}());
exports.UpdateUserComponent = UpdateUserComponent;
//# sourceMappingURL=update-user.component.js.map