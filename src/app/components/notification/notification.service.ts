import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Notif} from 'src/Arijmodel/notif'
@Injectable({
  providedIn: 'root'
})

export class NotificationService {
  headers = new HttpHeaders().set('content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  }
  
  url:string = "http://localhost:8081/SpringMVC/servlet/retrieve-all-Notification";
  urldelete: string = "http://localhost:8081/SpringMVC/servlet/remove-Notification/";
  urlupdate: string = "http://localhost:8081/SpringMVC/servlet/modify-Notification";
  urlgetById: string = "http://localhost:8081/SpringMVC/servlet/retrieve-Notification";
 urladdNotif:string="http://localhost:8081/SpringMVC/servlet/add-Notification" ;
 urlcount:string="http://localhost:8081/SpringMVC/servlet/count-notif"
 urlbyreceiver:string="http://localhost:8081/SpringMVC/servlet/Notif/get-notif-by-user/"
  constructor(private http:HttpClient) { }
  getNotifications(){
    return this.http.get<Notif[]>(this.url);
  }

  deleteNotification(id : number): Observable<Notif>{
    const urldelete = `${this.urldelete}/${id}`;
    return this.http.delete<Notif>(urldelete, this.httpOptions);
  }
  
  getUpdateNotification(id: number,notification:Notif): Observable<Notif>{
    return this.http.put<Notif>(this.urlupdate + id, notification);
  }


  public addNotification(notification:Notif){
    return this.http.post<Notif>( "http://localhost:8081/SpringMVC/servlet/add-Notification", notification);
  }

 
  getNotificationstat():Observable<any>{
    return this.http.get<any>(this.urlcount);
  }

  

  


}
