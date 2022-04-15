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

  baseUrl: string = 'http://localhost:6772/';
  

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
    return this.http.post<any>(this.baseUrl+"aic/open-act", data);
  }
  
}

