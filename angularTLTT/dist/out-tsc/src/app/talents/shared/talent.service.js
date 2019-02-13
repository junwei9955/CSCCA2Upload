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
var http_1 = require("@angular/http");
require("rxjs/Rx");
require("rxjs/add/operator/toPromise");
var S3 = require("aws-sdk/clients/s3");
var TalentService = /** @class */ (function () {
    function TalentService(http) {
        this.http = http;
        //readonly rootUrl = 'http://localhost:60687/';
        this.rootUrl = 'http://ec2-54-245-175-60.us-west-2.compute.amazonaws.com/';
        this.s3BaseUrl = 'https://tltts3.s3.amazonaws.com/';
        this.FOLDER = 'tltt/';
    }
    TalentService.prototype.uploadImage = function (file) {
        console.log(file);
        var bucket = new S3({
            accessKeyId: 'AKIAJ6LM3OKR46ZRULMA',
            secretAccessKey: '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'
        });
        var params = {
            Bucket: 'tltts3',
            Key: this.FOLDER + file.name,
            Body: file,
            ACL: 'public-read'
        };
        bucket.upload(params, function (err, data) {
            if (err) {
                console.log('There was an error uploading your file: ', err);
                return false;
            }
            console.log('Successfully uploaded file.', data);
            return true;
        });
        return this.s3BaseUrl + params.Key;
    };
    TalentService.prototype.getTalentListByUserId = function () {
        var _this = this;
        var userId = localStorage.getItem('userId');
        this.http.get(this.rootUrl + "api/TalentsByUserId/?id=" + userId).map(function (data) {
            return data.json();
        }).toPromise().then(function (x) {
            console.log("getTalent toPromise");
            _this.talentListByUserId = x;
        });
    };
    TalentService.prototype.getAllTalents = function () {
        var _this = this;
        this.http.get(this.rootUrl + "api/Talent").map(function (data) {
            return data.json();
        }).toPromise().then(function (x) {
            _this.allTalentList = x;
        });
    };
    TalentService.prototype.getTalentById = function (id) {
        var _this = this;
        this.http.get(this.rootUrl + "api/Talent/" + id).map(function (data) {
            return data.json();
        }).toPromise().then(function (x) {
            _this.selectedTalent = x;
        });
    };
    TalentService.prototype.postTalent = function (talent) {
        var body = JSON.stringify(talent);
        var headerOptions = new http_1.Headers({ 'Content-Type': 'application/json' });
        var requestOptions = new http_1.RequestOptions({ method: http_1.RequestMethod.Post, headers: headerOptions });
        return this.http.post(this.rootUrl + "api/Talent", body, requestOptions).map(function (x) { return x.json(); });
    };
    TalentService.prototype.putTalent = function (id, talent) {
        var body = JSON.stringify(talent);
        var headerOptions = new http_1.Headers({ 'Content-Type': 'application/json' });
        var requestOptions = new http_1.RequestOptions({ method: http_1.RequestMethod.Put, headers: headerOptions });
        return this.http.put(this.rootUrl + "api/Talent/" + id, body, requestOptions).map(function (res) { return res.json(); });
    };
    TalentService.prototype.deleteTalent = function (id) {
        return this.http.delete(this.rootUrl + "api/Talent/?id=" + id).map(function (res) { return res.json(); });
    };
    TalentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], TalentService);
    return TalentService;
}());
exports.TalentService = TalentService;
//# sourceMappingURL=talent.service.js.map