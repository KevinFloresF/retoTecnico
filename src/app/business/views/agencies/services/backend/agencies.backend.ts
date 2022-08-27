import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AgenciesService } from "../agencies.service";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class AgenciesBackend implements AgenciesService{
    constructor(
        private http: HttpClient,
    ){}

    getAgenciesList(): Observable<any> {
        throw new Error("Method not implemented.");
    }
    updateAgencie(): Observable<any> {
        throw new Error("Method not implemented.");
    }
}