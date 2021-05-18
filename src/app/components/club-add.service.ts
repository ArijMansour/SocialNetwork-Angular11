import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Club} from '../club';
import {logging} from "protractor";

@Injectable({
  providedIn: 'root'
})
export class ClubAddService {

  constructor(private http:HttpClient) { }

  public doAddClub(club: Club){
    return this.http.post("http://localhost:8081/SpringMVC/servlet/add-club",club,{responseType:'text' as 'json'});
  }

  public getAllClubs(){
    return this.http.get("http://localhost:8081/SpringMVC/servlet/retrieve-all-clubs");
  }

  public getClubById(id: any){
  return this.http.get("http://localhost:8081/SpringMVC/servlet/retrieve-club/"+id);
  }

  public deleteClub(id: any){
    return this.http.delete("http://localhost:8081/SpringMVC/servlet/remove-club/"+id,{responseType:'text' as 'json'});
  }

  public searchClub(name: any){
  return this.http.get("http://localhost:8081/SpringMVC/servlet/researsh-clubs/"+name);
  }

  public domodifyClub(club: Club){
    return this.http.put("http://localhost:8081/SpringMVC/servlet/modify-club",club,{responseType:'text' as 'json'});
  }

}
