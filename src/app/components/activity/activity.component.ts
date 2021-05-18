import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ActivityService } from './activity.service';
import { Activity } from 'src/Arijmodel/activity';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from 'src/Arijmodel/User';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})

export class ActivityComponent implements OnInit{
 public activities: Activity[] = [];
  activity : Activity =new Activity ; 
  id;
  user :user = new user ; 
  public users : user[]=[] ;
  alert: boolean=false;
  show!: boolean; 
  notifToUpdate:any ; 
  updatedepInt: boolean = false;
  showdepartments: boolean = false;
  showStats:boolean=false ;
  TypeNotification:any ; 
  NotificationType!:String ; //feha text
NotificationText!:String ; //feha type
  NotificationType1!: string;
  show1!: boolean;
    nbr !:number ;
    name: string= '';
selectedimage!:File ;
e!:any ;
  @ViewChild("fileUpload", { static: false })
  fileUpload!: ElementRef;files  = [];  
  fileName!: string;


constructor(private serviceActivity: ActivityService, private http: HttpClient , private _router:Router , private route:ActivatedRoute) { 

 this.id =  this.route.snapshot.params["id"] ;
}
 

ngOnInit(): void {
  this.serviceActivity.getActivities().subscribe((response) => {
    this.activities = response ;
   
  })

  this.getActivities() ;

//

}


public getActivities(): void {
  this.serviceActivity.getActivities().subscribe(
    (response: Activity[]) => {
      this.activities = response;
      console.log(this.activities);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}


public getActivitystat(): void {
  this.serviceActivity.getActivitystat().subscribe(
    (response: any) => {
      this.nbr = response;
      console.log(this.nbr);
    },
    );
}


addActivity(){
  this.serviceActivity.addActivity(this.activity).subscribe(res=>{console.log(res);
   
}  


) ;

this.alert=true; 

}


deleteDepartment(id:number){
  this.serviceActivity.deleteActivity(id).subscribe(()=>this.serviceActivity.getActivities().subscribe(res=>{this.activities=res}));
}


hideadd(){

  this.show=false;
  this.showdepartments=false;
  this.showStats=false;
  this.updatedepInt=false;

}


updatenotif(id: number, activity: Activity) {
  console.log('notif', activity);
  console.log('hi', this.notifToUpdate);
  this.serviceActivity.getUpdateActivity(id, activity).subscribe(() =>
    this.serviceActivity. getActivities().subscribe((res) => {
      this.activities = res;
    })
  );
  this.updatedepInt = false;
  this.show = true;
}


updatedepInterface(id: number, activity: Activity) {
  this.updatedepInt = true;
  this.show = false;
  console.log(id, activity);
  this.notifToUpdate = activity;
  console.log('hhh', this.notifToUpdate);
}


AddDepatmentshowdiv(){   //ce sont juste des controles de saisies sur les bouttons 
  this.show=true;
  this.showdepartments=false;
  this.updatedepInt=false;

}

Viewdepartment(){                   //ce sont juste des controles de saisies sur les bouttons 
  this.show=false;
  this.showdepartments=true;
  this.updatedepInt=false;
}

viewstat(){                  //ce sont juste des controles de saisies sur les bouttons 
  this.show=false ;
  this.showStats=true ;
  this.updatedepInt=false;
}

// search by Name 
search(){
  if(this.NotificationType!=""){
   this.activities=this.activities.filter(res=>{
     return res.activity_Name.toLocaleLowerCase().match(this.NotificationType.toLowerCase())
 
 
   });

  }else if (this.NotificationType =="") {

   this.ngOnInit() ;
  }


}

search1(){
 if(this.NotificationType=""){
  this.activities=this.activities.filter(res=>{
    return res.activity_Type.toLocaleLowerCase().match(this.NotificationType.toLowerCase())


  });

 }else if (this.NotificationType =="") {

  this.ngOnInit() ;
 }


}


//upload files coté front 

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


// jointure 
getactivitynamebyuserid(id:number){

  this.serviceActivity.getactivitynamebyuserid(id).subscribe(
    res =>  {
      alert(res);
      console.log("result ="+res);
      this.name = res;
    }
  )
  


    


}




}















/* 
  public editActivity: Activity ;
  public deleteActivity: Activity ;


  constructor(private activityService : ActivityService ) { 
    this.editActivity = new Activity ;
    this.deleteActivity= new Activity ;

  }

  ngOnInit(): void {
    this.getActivities() ;
  }
  public getActivities(): void {
    this.activityService.getActivities().subscribe(
      (response: Activity[]) => {
        this.activities = response;
        console.log(this.activities);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

 public onAddActivity(addForm: NgForm): void {
 // document.getElementById('add-employee-form')!.click(); 
    // @ts-ignore: Object is possibly 'null'
   // this.activityService.addActivity(addForm.value).subscribe(
   //   (response: Activity) => {
     //   console.log(response);
    //    this.getActivities();
    //    addForm.reset();
     // },
   //   (error: HttpErrorResponse) => {
   //     alert(error.message);
   //     addForm.reset();
   //   }
  //  );
 }
  
 

 // public onUpdateActivity(employee: Activity): void {
 //   this.activityService.updateActivity(employee).subscribe(
  //    (response: Activity) => {
  //      console.log(response);
       // this.getActivities();
  //    },
  //    (error: HttpErrorResponse) => {
    //    alert(error.message);
   ////   }
   // );
 // }

  //public onDeleteActivity(activityId: number): void {
    //this.activityService.deleteActivity(activityId).subscribe(
     // (response: void) => {
     //   console.log(response);
      //  this.getActivities();
     // },
     // (error: HttpErrorResponse) => {
      //  alert(error.message);
     // }
    //);
  //}
  //public searchActivities(key: string): void {
    //console.log(key);
    //const results: Activity[] = [];
   // for (const employee of this.activities) {
   //   if (employee.activity_Name.toLowerCase().indexOf(key.toLowerCase()) !== -1
  //    || employee.activity_Type.toLowerCase().indexOf(key.toLowerCase()) !== -1
 //     || employee.activity_Description.toLowerCase().indexOf(key.toLowerCase()) !== -1 ) {
   //     results.push(employee);
 //     }
//    }
 //   this.activities = results;
//    if (results.length === 0 || !key) {
  //    this.getActivities();
//   }
//  }

public onOpenModal(activity: Activity, mode: string): void {
  const container = document.getElementById("main-container");
  const button = document.createElement('button');
  button.type = 'button'; 
  button.style.display = 'none';
  button.setAttribute('data-toggle', 'modal');
  if (mode === 'add') {
    button.setAttribute('data-target', '#addEmployeeModal');
  }
  if (mode === 'edit') {
    this.editActivity = activity;
    button.setAttribute('data-target', '#updateEmployeeModal');
  }
  if (mode === 'delete') {
    this.deleteActivity = activity;
    button.setAttribute('data-target', '#deleteEmployeeModal');
  }
 container?.appendChild(button) ;
 button.click() ;

}

}*/