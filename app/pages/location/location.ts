import {Page, NavController} from 'ionic-angular';
import {HomePage} from '../home/home'
import {BahnService} from '../../service/bahnService';
import {LocalStorage} from '../../service/localStorage';
import {ILocation} from '../../common/types'

@Page({
  templateUrl: 'build/pages/location/location.html'
})
export class LocationPage {
    searchQuery: string = '';
    x:string = "";
    items:ILocation[];
   
    constructor(private nav: NavController, private bahnService:BahnService, private localStorage: LocalStorage){
    }
    
    getItems(searchbar) {
        // Reset items back to all of the items
        //this.initializeItems();

        // set q to the value of the searchbar
        let q:string = searchbar.value;

        // if the value is an empty string don't filter the items
        if (q.trim() == '') {
            this.items = [];
            return;
        }
        let that = this;
        this.bahnService.searchStation(q).subscribe(function(res){
            that.items = [];
            let locationList:any[] =  res.LocationList.StopLocation;
            if (typeof(locationList.length) === "undefined"){
                return;
            }
            
            locationList.forEach(element => {
                that.items.push({lat:element.lat,lon:element.lon, name: element.name, id: element.id});
            });
        });
        
    }
    
    setSelectedLocation(selectedLocation:ILocation) {
        this.localStorage.selectedLocation = selectedLocation;
        this.nav.setRoot(HomePage);
    }
}