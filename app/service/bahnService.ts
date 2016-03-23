import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Observable}     from 'rxjs/Observable';

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";


@Injectable()
export class BahnService {

    http: Http;
    
    constructor (http: Http) {

        this.http = http;
    }

    encodeSpaces (query: string) {

        return query.replace(" ", "+");
    }
    
    searchStation (searchString: string) {

        let query = this.encodeSpaces(searchString);
        let url = "http://localhost:8080/stations?query=" + searchString;

        return this.http
            .get(url)
            .map(res => res.json())
            .catch(this.handleError);
    }
    
    private handleError (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}