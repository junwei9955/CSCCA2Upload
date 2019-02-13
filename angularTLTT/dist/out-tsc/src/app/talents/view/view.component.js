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
var talent_service_1 = require("../shared/talent.service");
var router_1 = require("@angular/router");
var ViewComponent = /** @class */ (function () {
    function ViewComponent(talentService, activatedRoute) {
        this.talentService = talentService;
        this.activatedRoute = activatedRoute;
    }
    ViewComponent.prototype.ngOnInit = function () {
        this.userId = localStorage.getItem('userId');
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.talentService.getTalentById(this.id);
    };
    ViewComponent = __decorate([
        core_1.Component({
            selector: 'app-view',
            templateUrl: './view.component.html',
            styleUrls: ['./view.component.css']
        }),
        __metadata("design:paramtypes", [talent_service_1.TalentService, router_1.ActivatedRoute])
    ], ViewComponent);
    return ViewComponent;
}());
exports.ViewComponent = ViewComponent;
//# sourceMappingURL=view.component.js.map