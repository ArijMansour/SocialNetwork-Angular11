import { Component, OnInit } from '@angular/core';
import {ClubAddService} from '../club-add.service';
import {Club} from '../../club';
import {ShowClubsComponent} from "../show-clubs/show-clubs.component";

@Component({
  selector: 'app-modify-club',
  templateUrl: './modify-club.component.html',
  styleUrls: ['./modify-club.component.css']
})
export class ModifyClubComponent implements OnInit {
  club: Club = new Club("","","","");
  message:any;
  msg:any;
  a:any;
  constructor(private service:ClubAddService) { }

  ngOnInit(): void {



  }

  public modifierclNow(){
    let resp=this.service.domodifyClub(this.club);
    resp.subscribe((data)=>this.message=data);
  }



}
