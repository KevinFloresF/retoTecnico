import { Observable, Subscription } from "rxjs";
import { AgencyRequest } from "../models/request/agencie.request";
import { AgenciesList } from "../models/response/agencies.response";

export abstract class AgenciesService{

    abstract getAgenciesList():Observable<AgenciesList[]>;
    abstract updateAgencie(agencyRequest:AgencyRequest):Observable<any>;
    abstract addNewAgency(agencyRequest:AgencyRequest):Observable<any>;
    abstract addFavorite(agencyRequest:AgencyRequest):Observable<any>;
    getRefreshAgencyTable$:any;
}