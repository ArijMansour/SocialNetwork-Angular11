import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NotificationService } from './notification.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Notif } from 'src/Arijmodel/notif';
import { updateLanguageServiceSourceFile } from 'typescript';
import { Activity } from 'src/Arijmodel/activity';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  loader=true ; 
  notifications: Notif[] = [];
  notification: Notif = new Notif() ;
  alert: boolean=false;
  show!: boolean; 
 // show1!:boolean ; 
  notifToUpdate:any ; 
  updatedepInt: boolean = false;
  showdepartments: boolean = false;
  showStats:boolean=false ;

  TypeNotification:any ; 

  nbr!:number ; 
NotificationType!:String ; //feha text
NotificationText!:String ; //feha type
  NotificationType1!: string;
  show1!: boolean;

e!:any ;
  @ViewChild("fileUpload", { static: false })
  fileUpload!: ElementRef;files  = [];  
  fileName!: string;

  constructor(private serviceNotification: NotificationService, private http: HttpClient , private _router:Router , private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.serviceNotification.getNotifications().subscribe((response) => {
      this.notifications = response ;

      this.loader=false ; 
    })

    this.getNotifications() ;

  }


  public getNotifications(): void {
    this.serviceNotification.getNotifications().subscribe(
      (response: Notif[]) => {
        this.notifications = response;
        console.log(this.notifications);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public  getNotificationstat(): void {
    this.serviceNotification.getNotificationstat().subscribe(
      (response: any) => {
        this.nbr = response;
        console.log(this.nbr);
      },
      );
  }


  /*getNotificationbyreceiver(id:number) {
    this.serviceNotification.getNotificationbyreceiver(id).subscribe(
    (response:any) => {
      this.notifications = response ;
      console.log(this.notifications) ;
    }
    
    );

  }*/

  
  url="./assets/img/123.png"
  onselectFile(e: any){
    if(e.target.files){
      var  reader = new FileReader() ;
      reader.readAsDataURL(e.target.files[0]) ;
     reader.onload=(event:any)=>{
       this.url=event.target.result ;
     }
    }
  }
  
  
  
  //deleterow(id:number){
   // this.serviceNotification.deleteNotification(id).subscribe(()=>this.serviceNotification.getNotifications().subscribe(res=>{this.notifications=res}));
 // }

  addNotification(){
    this.serviceNotification.addNotification(this.notification).subscribe(res=>{console.log(res);
      
     
  }  
  
  
  ) ;
 
  this.alert=true; 

}

//closealert(){
  //this.alert=false;
//}



deleteDepartment(id:number){
  this.serviceNotification.deleteNotification(id).subscribe(()=>this.serviceNotification.getNotifications().subscribe(res=>{this.notifications=res}));
}



/*showadd(){

  this.show=true; //ngif si je vais travaillé avec des multis buttons 
  this.show1=false ; 
}*/

hideadd(){

  this.show=false;
  this.showdepartments=false;
  this.showStats=false;

}

updatenotif(id: number, notification: Notif) {
  console.log('notif', notification);
  console.log('hi', this.notifToUpdate);
  this.serviceNotification.getUpdateNotification(id, notification).subscribe(() =>
    this.serviceNotification. getNotifications().subscribe((res) => {
      this.notifications = res;
    })
  );
  this.updatedepInt = false;
  this.show = true;
}


updatedepInterface(id: number, notification: Notif) {
  this.updatedepInt = true;
  this.show = false;
  console.log(id, notification);
  this.notifToUpdate = notification;
  console.log('hhh', this.notifToUpdate);
}

//show different pages 
AddDepatmentshowdiv(){
  this.show=true;
  this.showdepartments=false;
  this.updatedepInt=false;

}

Viewdepartment(){
  this.show=false;
  this.showdepartments=true;
  this.updatedepInt=false;
}

viewstat(){
  this.show=false ;
  this.showStats=true ;
  this.updatedepInt=false;
}

 search(){
   if(this.NotificationType!=""){
    this.notifications=this.notifications.filter(res=>{
      return res.notification_Name.toLocaleLowerCase().match(this.NotificationType.toLowerCase())
  
  
    });

   }else if (this.NotificationType =="") {

    this.ngOnInit() ;
   }

 
 }

 search1(){
  if(this.NotificationType1=""){
   this.notifications=this.notifications.filter(res=>{
     return res.notification_Type.toLocaleLowerCase().match(this.NotificationType1.toLowerCase())
 
 
   });

  }else if (this.NotificationType1 =="") {

   this.ngOnInit() ;
  }


}
 


 }
