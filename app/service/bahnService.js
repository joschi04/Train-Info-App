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
var core_1 = require("angular2/core");
var http_1 = require("angular2/http");
var Observable_1 = require('rxjs/Observable');
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var BahnService = (function () {
    function BahnService(http) {
        this.http = http;
        this.hostUrl = "http://bahnapi.azurewebsites.net";
    }
    BahnService.prototype.encodeSpaces = function (query) {
        return query.replace(" ", "+");
    };
    BahnService.prototype.searchStation = function (searchString) {
        var query = this.encodeSpaces(searchString);
        var url = this.hostUrl + "/stations?query=" + searchString;
        return this.http
            .get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    BahnService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    BahnService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BahnService);
    return BahnService;
}());
exports.BahnService = BahnService;
//# sourceMappingURL=bahnService.js.map