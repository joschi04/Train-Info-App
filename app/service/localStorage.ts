import {Injectable} from "angular2/core";
import {ILocation} from "../common/types"

@Injectable()
export class LocalStorage {
    private _selectedLocation:ILocation;
    constructor(){
        
        this._selectedLocation = {id:0,lon:0, lat:0, name:"-- keine Auswahl --"};
    }
    
    get selectedLocation():ILocation {
        return this._selectedLocation;
    }
    set selectedLocation(selectedLocation:ILocation) {
        this._selectedLocation = selectedLocation;
    }
    
}