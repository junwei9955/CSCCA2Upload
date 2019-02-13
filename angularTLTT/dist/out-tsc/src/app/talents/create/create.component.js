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
var ngx_toastr_1 = require("ngx-toastr");
var router_1 = require("../../../../node_modules/@angular/router");
var CreateComponent = /** @class */ (function () {
    function CreateComponent(talentService, toastr, router) {
        this.talentService = talentService;
        this.toastr = toastr;
        this.router = router;
    }
    CreateComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    CreateComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.reset();
        this.talentService.selectedTalent = {
            TalentId: null,
            UserId: '',
            Name: '',
            ShortName: '',
            Reknown: '',
            Bio: '',
            Email: '',
            Image: null,
            Status: null
        };
    };
    CreateComponent.prototype.onSubmit = function (form) {
        var _this = this;
        form.value.Email = localStorage.getItem('userEmail');
        var file = this.selectedFiles.item(0);
        var imageUrl = this.talentService.uploadImage(file);
        form.value.UserId = localStorage.getItem('userId');
        form.value.Image = imageUrl;
        console.log(form.value);
        this.talentService.postTalent(form.value).subscribe(function (data) {
            _this.resetForm(form);
            _this.toastr.success('New Talent created successfully', 'Talent Register');
            _this.talentService.getTalentById(localStorage.getItem('userId'));
            _this.router.navigate(['/home']);
        });
    };
    CreateComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    CreateComponent = __decorate([
        core_1.Component({
            selector: 'app-create',
            templateUrl: './create.component.html',
            styleUrls: ['./create.component.css']
        }),
        __metadata("design:paramtypes", [talent_service_1.TalentService, ngx_toastr_1.ToastrService, router_1.Router])
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=create.component.js.map