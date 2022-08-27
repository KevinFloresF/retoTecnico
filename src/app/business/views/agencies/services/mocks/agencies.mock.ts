import { JsonPipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { iif, map, Observable } from "rxjs";
import { Agencies } from "../../models/response/agencies.response";
import { AgenciesService } from "../agencies.service";

@Injectable({
    providedIn:'root'
})
export class AgenciesMock implements AgenciesService{

    constructor(
        private http: HttpClient,
      ) {}

    getAgenciesList(): Observable<any> {
        return this.http.get<any>('./assets/mocks/agencias.json')
            .pipe(map(resp =>{

                if(!this.agenciesStr){

                    const agencies =  new Agencies(resp).agency;

                    localStorage.setItem('agencies',JSON.stringify(agencies));
                    
                   return agencies;                   
                }     

                 return this.agenciesStr;
            }));
    }
    updateAgencie(): Observable<any> {
        throw new Error("Method not implemented.");
    }

    get agenciesStr(){
        return JSON.parse(localStorage.getItem('agencies') || 'null' );
    }
    
}