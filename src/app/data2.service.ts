import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Data2Service {

  constructor(private hc:HttpClient) { }

  getMenuData():Observable<any>{
    return this.hc.get<any>("http://localhost:3000/menu")
  }

  userLoginStatus():boolean{
    if(localStorage.getItem("username")==null){
      return false;
    }
    else{
      return true;
    }
  }

  logout(){
    localStorage.clear();
  }
}
