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
    get getRefreshAgencyTable$() {
		return ;
	}
    
    addFavorite(): Observable<any> {
        throw new Error("Method not implemented.");
    }
    getAgenciesList(): Observable<any> {
        throw new Error("Method not implemented.");
    }
    updateAgencie(agencyRequest:any): Observable<any> {
        throw new Error("Method not implemented.");
    }
    addNewAgency(agencyRequest:any): Observable<any> {
        throw new Error("Method not implemented.");
    }
}