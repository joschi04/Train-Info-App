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
var ionic_angular_1 = require('ionic-angular');
var location_1 = require('../location/location');
var localStorage_1 = require('../../service/localStorage');
var HomePage = (function () {
    function HomePage(nav, localStorage) {
        this.nav = nav;
        this.localStorage = localStorage;
    }
    HomePage.prototype.openLocationPage = function () {
        // navigate to the new page if it is not the current page
        this.nav.setRoot(location_1.LocationPage);
    };
    Object.defineProperty(HomePage.prototype, "selectedLocation", {
        get: function () {
            this._selectedLocation = this.localStorage.selectedLocation.name;
            return this._selectedLocation;
        },
        enumerable: true,
        configurable: true
    });
    HomePage = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/home/home.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, localStorage_1.LocalStorage])
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
//# sourceMappingURL=home.js.map