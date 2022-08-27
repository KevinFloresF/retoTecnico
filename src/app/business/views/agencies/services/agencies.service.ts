import { Observable } from "rxjs";

export abstract class AgenciesService{

    abstract getAgenciesList():Observable<any>;
    abstract updateAgencie():Observable<any>;
}