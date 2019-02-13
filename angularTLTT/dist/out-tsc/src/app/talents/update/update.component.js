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
var router_1 = require("../../../../node_modules/@angular/router");
var ngx_toastr_1 = require("../../../../node_modules/ngx-toastr");
var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(talentService, activatedRoute, toastr, router) {
        this.talentService = talentService;
        this.activatedRoute = activatedRoute;
        this.toastr = toastr;
        this.router = router;
    }
    UpdateComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    UpdateComponent.prototype.ngOnInit = function () {
        this.resetForm();
        this.userId = localStorage.getItem('userId');
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.talentService.getTalentById(this.id);
    };
    UpdateComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.reset();
        this.talentService.selectedTalent = {
            TalentId: null,
            UserId: '',
            Name: '',
            ShortName: '',
            Reknown: '',
            Bio: '',
            Image: '',
            Status: null,
            Email: '',
        };
    };
    UpdateComponent.prototype.onDelete = function (id) {
        var _this = this;
        if (confirm("Are you sure you want to delete this talent?") == true) {
            this.talentService.deleteTalent(parseInt(id)).subscribe(function (x) {
                _this.talentService.getTalentById(_this.userId);
                _this.router.navigate(['/profile']);
            });
        }
    };
    UpdateComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (this.selectedFiles) {
            var file = this.selectedFiles.item(0);
            var imageUrl = this.talentService.uploadImage(file);
            form.value.Image = imageUrl;
            form.value.UserId = this.userId;
            this.talentService.putTalent(form.value.TalentId, form.value)
                .subscribe(function (data) {
                _this.resetForm(form);
                _this.toastr.info("Talent updated successfully", "Talent Update");
                _this.router.navigate(['/view/' + _this.id]);
            });
        }
        else {
            form.value.UserId = this.userId;
            this.talentService.putTalent(form.value.TalentId, form.value)
                .subscribe(function (data) {
                _this.resetForm(form);
                _this.toastr.info("Talent updated successfully", "Talent Update");
                _this.router.navigate(['/view/' + _this.id]);
            });
        }
        console.log(form.value);
    };
    UpdateComponent = __decorate([
        core_1.Component({
            selector: 'app-update',
            templateUrl: './update.component.html',
            styleUrls: ['./update.component.css']
        }),
        __metadata("design:paramtypes", [talent_service_1.TalentService, router_1.ActivatedRoute, ngx_toastr_1.ToastrService, router_1.Router])
    ], UpdateComponent);
    return UpdateComponent;
}());
exports.UpdateComponent = UpdateComponent;
//# sourceMappingURL=update.component.js.map