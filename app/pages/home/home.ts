import {Page, NavController} from 'ionic-angular';
import {LocationPage} from '../location/location';
import {LocalStorage} from '../../service/localStorage';


@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    private _selectedLocation:string;
    constructor(private nav: NavController, private localStorage: LocalStorage){
    }
    
    openLocationPage() {
        // navigate to the new page if it is not the current page
        this. nav.setRoot(LocationPage);
    }
    
    get selectedLocation():string {
        this._selectedLocation = this.localStorage.selectedLocation.name;
        return this._selectedLocation;
    }
}
