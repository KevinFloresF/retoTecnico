import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        let intReq =  this.addCredentials(req);
        
        return next.handle(intReq);
        
    }
      private addCredentials = (request:HttpRequest<any>)=>{
        return request.clone({
            headers:
            request.headers.set('Authorization','Bearer '+'token')
        })
    }
}