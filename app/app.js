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
var ionic_native_1 = require('ionic-native');
var home_1 = require('./pages/home/home');
var location_1 = require('./pages/location/location');
var locationSelected_1 = require('./pages/locationSelected/locationSelected');
var dateandtime_1 = require('./pages/dateandtime/dateandtime');
var bahnService_1 = require('./service/bahnService');
var localStorage_1 = require('./service/localStorage');
var core_1 = require('angular2-google-maps/core');
var MyApp = (function () {
    function MyApp(app, platform, menu) {
        this.app = app;
        this.platform = platform;
        this.menu = menu;
        // make HelloIonicPage the root (or first) page
        this.rootPage = home_1.HomePage;
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Startseite', component: home_1.HomePage },
            { title: 'Bahnhof auswählen', component: location_1.LocationPage },
            { title: 'Details zum Bahnhof', component: locationSelected_1.LocationSelectedPage },
            { title: 'Datum und Zeit wählen', component: dateandtime_1.DateAndTimePage }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            ionic_native_1.StatusBar.styleDefault();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        var nav = this.app.getComponent('nav');
        nav.setRoot(page.component);
    };
    MyApp = __decorate([
        ionic_angular_1.App({
            templateUrl: 'build/app.html',
            providers: [bahnService_1.BahnService, localStorage_1.LocalStorage, core_1.ANGULAR2_GOOGLE_MAPS_PROVIDERS],
            config: {} // http://ionicframework.com/docs/v2/api/config/Config/
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.IonicApp, ionic_angular_1.Platform, ionic_angular_1.MenuController])
    ], MyApp);
    return MyApp;
}());
//# sourceMappingURL=app.js.map