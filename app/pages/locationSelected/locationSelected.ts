import {Page, NavController, NavParams} from 'ionic-angular';
import {ILocation} from '../../common/types'
import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';
import {HomePage} from '../home/home' 
import {LocalStorage} from '../../service/localStorage';

@Page({
  directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES], 
  templateUrl: 'build/pages/locationSelected/locationSelected.html'
})

export class LocationSelectedPage {
  private _selectedLocation: ILocation;
  
  constructor(private nav: NavController, navParams: NavParams, private localStorage: LocalStorage) {
    // If we navigated to this page, we will have an item available as a nav param
    this._selectedLocation = navParams.get('selectedLocation');
    
    if (typeof(this._selectedLocation) === "undefined" && this.localStorage.selectedLocation.id != 0){
        this._selectedLocation = this.localStorage.selectedLocation;
    }
  }
  
  get name():string{
      return this._selectedLocation.name;
  }
  
  get lat():number{
      return this._selectedLocation.lat;
  }
  
  get lng():number{
      return this._selectedLocation.lon;
  }
  
  goToHome(save:boolean){
      if (save){
        this.localStorage.selectedLocation = this._selectedLocation;
      }
      this.nav.setRoot(HomePage);
  }
}