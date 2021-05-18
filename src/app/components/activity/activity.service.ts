import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from 'src/Arijmodel/activity';
import { user } from 'src/Arijmodel/User';

const httpOptions= {
  headers:new HttpHeaders({'Accept':'text/plain' , 
  'Content-Type' : 'text/plain'
})
,'responseType' : "text"

}

@Injectable({providedIn: 'root'})


export class ActivityService {

  headers = new HttpHeaders().set('content-Type', 'application/json').set('Accept', 'application/json').set('Accept','application/text');
  httpOptions = {
    headers: this.headers

}
  url:string = "http://localhost:8081/SpringMVC/servlet/retrieve-all-activities";
  urldelete: string = "http://localhost:8081/SpringMVC/servlet/remove-activity/";
  urlupdate: string = "http://localhost:8081/SpringMVC/servlet/modify-activity";
  urlgetById: string = "http://localhost:8081/SpringMVC/servlet/retrieve-activity/";
 urladdNotif:string="http://localhost:8081/SpringMVC/servlet/add-activity" ;
 urlcount:string="http://localhost:8081/SpringMVC/servlet/nbActivities" ;
 urljoin:string="http://localhost:8081/SpringMVC/servlet/GetUserbyActivity" ;
  constructor(private http:HttpClient) { }
  getActivities(){
    return this.http.get<Activity[]>(this.url);
  }

  deleteActivity(id : number): Observable<Activity>{
    const urldelete = `${this.urldelete}/${id}`;
    return this.http.delete<Activity>(urldelete, this.httpOptions);
  }
  
  getUpdateActivity(id: number,activity:Activity): Observable<Activity>{
    return this.http.put<Activity>(this.urlupdate + id, activity);
  }


  public addActivity(activity:Activity ){

    
    return this.http.post<Activity>( "http://localhost:8081/SpringMVC/servlet/add-activity", activity);
  }

  getActivitystat():Observable<any>{
    return this.http.get<any>(this.urlcount);
  }

  

  getActivityById(id:number):Observable<any>{
    
    return this.http.get(`${this.urlgetById}/${id}`);
   


  }


  getactivitynamebyuserid(id:number ){

    return this.http.get(`${this.urljoin}/${id}`, {responseType:'text'});

  }

}
