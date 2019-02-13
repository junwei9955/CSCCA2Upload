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
var router_1 = require("@angular/router");
var user_service_1 = require("../user/shared/user.service");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Nav bar component : " + localStorage.getItem('userToken'));
        if (localStorage.getItem('userToken')) {
            this.userService.getUserClaims().subscribe(function (result) {
                console.log(result);
                _this.userClaims = result;
                localStorage.setItem('userId', _this.userClaims.Id);
                localStorage.setItem('userEmail', _this.userClaims.Email);
            }, function (error) {
                _this.errors = error;
                console.log(_this.errors);
                localStorage.removeItem('userId');
                localStorage.removeItem('userToken');
                localStorage.removeItem('userEmail');
                _this.router.navigate(['/signin']);
            }, function () {
            });
        }
        else {
            this.router.navigate(['/signin']);
        }
    };
    NavbarComponent.prototype.Logout = function () {
        localStorage.removeItem('userToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('userEmail');
        this.router.navigate(['/signin']);
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map