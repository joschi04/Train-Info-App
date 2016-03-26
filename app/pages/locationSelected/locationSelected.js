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
var core_1 = require('angular2-google-maps/core');
var home_1 = require('../home/home');
var localStorage_1 = require('../../service/localStorage');
var LocationSelectedPage = (function () {
    function LocationSelectedPage(nav, navParams, localStorage) {
        this.nav = nav;
        this.localStorage = localStorage;
        // If we navigated to this page, we will have an item available as a nav param
        this._selectedLocation = navParams.get('selectedLocation');
        if (typeof (this._selectedLocation) === "undefined" && this.localStorage.selectedLocation.id != 0) {
            this._selectedLocation = this.localStorage.selectedLocation;
        }
    }
    Object.defineProperty(LocationSelectedPage.prototype, "name", {
        get: function () {
            return this._selectedLocation.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationSelectedPage.prototype, "lat", {
        get: function () {
            return this._selectedLocation.lat;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationSelectedPage.prototype, "lng", {
        get: function () {
            return this._selectedLocation.lon;
        },
        enumerable: true,
        configurable: true
    });
    LocationSelectedPage.prototype.goToHome = function (save) {
        if (save) {
            this.localStorage.selectedLocation = this._selectedLocation;
        }
        this.nav.setRoot(home_1.HomePage);
    };
    LocationSelectedPage = __decorate([
        ionic_angular_1.Page({
            directives: [core_1.ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
            templateUrl: 'build/pages/locationSelected/locationSelected.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, ionic_angular_1.NavParams, localStorage_1.LocalStorage])
    ], LocationSelectedPage);
    return LocationSelectedPage;
}());
exports.LocationSelectedPage = LocationSelectedPage;
//# sourceMappingURL=locationSelected.js.map