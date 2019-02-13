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
var user_service_1 = require("../user/shared/user.service");
var core_1 = require("@angular/core");
var ngx_toastr_1 = require("ngx-toastr");
var router_1 = require("@angular/router");
var talent_service_1 = require("../talents/shared/talent.service");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, userService, toastr, talentService) {
        this.router = router;
        this.userService = userService;
        this.toastr = toastr;
        this.talentService = talentService;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('userToken')) {
            this.userService.getUserClaims().subscribe(function (result) {
                console.log(result);
                _this.userClaims = result;
                localStorage.setItem('userId', _this.userClaims.Id);
            }, function (error) {
                _this.errors = error;
                console.log(_this.errors);
                localStorage.removeItem('userId');
                localStorage.removeItem('userToken');
                _this.router.navigate(['/home']);
            }, function () {
                _this.talentService.getTalentListByUserId();
            });
        }
        else {
            this.router.navigate(['/home']);
        }
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService, ngx_toastr_1.ToastrService, talent_service_1.TalentService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map