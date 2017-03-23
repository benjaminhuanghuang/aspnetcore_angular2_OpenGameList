import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

import {Item} from "./item";

@Injectable()
export class ItemService 
{
    private baseUrl = "api/items/"; // web api URL
    
    constructor(private http: Http) 
    { }
    // calls the [GET] /api/items/GetLatest/{n} Web API method to retrieve the latest items.
    getLatest(num?: number) 
    {
        var url = this.baseUrl + "GetLatest/";
        if (num != null) { url += num; }
        return this.http.get(url).map(response => response.json());
    }
    // calls the [GET] /api/items/GetMostViewed/{n} Web API method to retrieve the most viewed items.
    getMostViewed(num?: number) 
    {
        var url = this.baseUrl + "GetMostViewed/";
        if (num != null) { url += num; }
        return this.http.get(url).map(response => response.json());
    }
    // calls the [GET] /api/items/GetRandom/{n} Web API method to retrieve n random items.
    getRandom(num?: number) 
    {
        var url = this.baseUrl + "GetRandom/";
        if (num != null) { url += num; }
        return this.http.get(url).map(response => response.json());
    }
    // calls the [GET] /api/items/{id} Web API method to retrieve the item with the given id.
    get(id: number) 
    {
        if (id == null) { throw new Error("id is required."); }
        var url = this.baseUrl + id;
        return this.http.get(url).map(res => <Item>res.json());
    }
    private handleError(error: Response) 
    {
        // output errors to the console.
        console.error(error);
        //return Observable.throw(error.json().error || "Server error");
    }
}