import { JsonPipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { iif, map, Observable, Subject, tap } from "rxjs";
import { AgencyRequest } from "../../models/request/agencie.request";
import { Agencies, AgenciesList, AgenciesResponse } from "../../models/response/agencies.response";
import { AgenciesService } from "../agencies.service";

@Injectable({
    providedIn:'root'
})
export class AgenciesMock implements AgenciesService{
    private _refreshAgencyTable$ = new Subject<void>();
    constructor(
        private http: HttpClient,
      ) {}
    
      
      get getRefreshAgencyTable$() {
		return this._refreshAgencyTable$;
	}


    getAgenciesList(): Observable<AgenciesList[]> {
        return this.http.get<AgenciesResponse[]>('./assets/mocks/agencias.json')
            .pipe(map(resp =>{

                if(!this.agenciesStr){

                    const agencies =  new Agencies(resp).agency;

                    localStorage.setItem('agencies',JSON.stringify(agencies));                    
                    
                   return agencies;                   
                }     

                 return this.agenciesStr;
            }));
    }
    updateAgencie(agencyRequest:AgencyRequest){     

        let agenciesStored = this.agenciesStr;
        agenciesStored.splice(agencyRequest.id,1,agencyRequest);        
        localStorage.setItem('agencies',JSON.stringify(agenciesStored)); 
        this._refreshAgencyTable$.next();
        return this.http.put<AgencyRequest>('',agencyRequest)   
    }
    addNewAgency(agencyRequest:AgencyRequest){
        let newAgency = agencyRequest;
       
        let agenciesStored = this.agenciesStr;
        newAgency.id = agenciesStored.length;

        agenciesStored.push(newAgency);

        localStorage.setItem('agencies',JSON.stringify(agenciesStored)); 
        this._refreshAgencyTable$.next();
        return this.http.put<AgencyRequest>('',agencyRequest)
    }    
    addFavorite(agencyRequest:AgencyRequest) {     

        let agenciesStored = this.agenciesStr;
        agencyRequest.favorite =!agencyRequest.favorite;
        agenciesStored.splice(agencyRequest.id,1,agencyRequest);        
        localStorage.setItem('agencies',JSON.stringify(agenciesStored)); 

        this._refreshAgencyTable$.next();

        return this.http.put<AgencyRequest>('',agencyRequest)   
    }

    get agenciesStr(){
        return JSON.parse(localStorage.getItem('agencies') || 'null' );
    }
    
}