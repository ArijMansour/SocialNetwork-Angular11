import { Component, OnInit } from '@angular/core';
import {ClubAddService} from '../club-add.service';
import {Club} from '../../club';

@Component({
  selector: 'app-add-club',
  templateUrl: './add-club.component.html',
  styleUrls: ['./add-club.component.css']
})
export class AddClubComponent implements OnInit {


  club: Club = new Club("","","","");
  isaddedclub: string="";
  message_n: string="";
  message:any;

  constructor(private service:ClubAddService) { }

  ngOnInit(): void {
  }

  public ajouterclNow(){
    let resp=this.service.doAddClub(this.club);
    resp.subscribe((data)=>this.message=data);
    this.isaddedclub= " is added with succes";
    this.message_n= this.club.club_Name;

  }


  }


