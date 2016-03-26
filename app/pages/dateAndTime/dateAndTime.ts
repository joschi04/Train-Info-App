import {Page, NavController} from 'ionic-angular';
import {LocationPage} from '../location/location';
import {LocalStorage} from '../../service/localStorage';


@Page({
  templateUrl: 'build/pages/dateandtime/dateandtime.html'
})
export class DateAndTimePage {
    date:string;
    constructor(private nav: NavController, private localStorage: LocalStorage){
        var d = new Date();
        this.date = d.toLocaleDateString();
    }
    
    openLocationPage() {
        // navigate to the new page if it is not the current page
        this. nav.setRoot(LocationPage);
    }
    
}