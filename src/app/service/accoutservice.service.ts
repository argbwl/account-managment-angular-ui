import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../api/api.response';
import { HttpClient } from '@angular/common/http';
import { Account } from '../model/account.model';



@Injectable({
  providedIn: 'root'
})
export class AccoutserviceService {

  constructor(private http: HttpClient) { 

  }

  //acccount-validation
  baseUrl: string = 'http://localhost:6782/';
  

  getAccount(): Observable<ApiResponse>{
    return this.http.get<ApiResponse>(this.baseUrl+"aic/acc-info-list");
  }

  getAccountList(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"aic/acc-info-list");
  }

  getTodaysAccountList(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"aic/acc-info-dtlist");
  }

  addNewAccount(data:any){
    console.log(data);
    return this.http.post<any>(this.baseUrl+"aic/open-act", data);
  }

  getAccountListForClose(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"aic/acc-info-list-for-close");
  }

  closeAccount(data:string){
    return this.http.post<string>(this.baseUrl+"aic/close-act", JSON.parse(JSON.stringify(data)));
  }

  getStateListByCountry(ctry:string): Observable<any>{
    return this.http.get<any>(this.baseUrl+"wpc/get-State/"+`${ctry}`);
  }

  getCityListByState(state:string): Observable<any>{
    return this.http.get<any>(this.baseUrl+"wpc/get-cities/"+`${state}`);
  }
  
}

