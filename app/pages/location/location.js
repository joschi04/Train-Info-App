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
var locationSelected_1 = require('../locationSelected/locationSelected');
var bahnService_1 = require('../../service/bahnService');
var LocationPage = (function () {
    function LocationPage(nav, bahnService) {
        this.nav = nav;
        this.bahnService = bahnService;
        this.searchQuery = '';
        this.x = "";
    }
    LocationPage.prototype.getItems = function (searchbar) {
        // Reset items back to all of the items
        //this.initializeItems();
        // set q to the value of the searchbar
        var q = searchbar.value;
        // if the value is an empty string don't filter the items
        if (q.trim() == '') {
            this.items = [];
            return;
        }
        var that = this;
        this.bahnService.searchStation(q).subscribe(function (res) {
            that.items = [];
            var locationList = res.LocationList.StopLocation;
            if (typeof (locationList.length) === "undefined") {
                return;
            }
            locationList.forEach(function (element) {
                that.items.push({ lat: element.lat, lon: element.lon, name: element.name, id: element.id });
            });
        });
    };
    LocationPage.prototype.setSelectedLocation = function (selectedLocation) {
        this.nav.push(locationSelected_1.LocationSelectedPage, { selectedLocation: selectedLocation });
    };
    LocationPage = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/location/location.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, bahnService_1.BahnService])
    ], LocationPage);
    return LocationPage;
}());
exports.LocationPage = LocationPage;
//# sourceMappingURL=location.js.map