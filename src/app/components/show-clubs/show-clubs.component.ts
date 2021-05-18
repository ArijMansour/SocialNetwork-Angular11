import { Component, OnInit } from '@angular/core';
import {ClubAddService} from '../club-add.service';
import {Club} from '../../club';

@Component({
  selector: 'app-show-clubs',
  templateUrl: './show-clubs.component.html',
  styleUrls: ['./show-clubs.component.css']
})
export class ShowClubsComponent implements OnInit {

  clubs: any;
  club: any;
  succesdelete: any;
  name: any;
  msg:any;
  i:any;



  constructor(private service: ClubAddService) { }

  ngOnInit(): void {
    let resp=this.service.getAllClubs();
    resp.subscribe((data)=>this.clubs=data);
  }

  public chercherClub() {
    let res = this.service.searchClub(this.name);
    res.subscribe((data) => this.clubs=data);
  }
  public afficherClubById(id: any) {
    let re = this.service.getClubById(id);
    re.subscribe((data) => this.club=data);
  }

  public supprimerClub(id: any) {
    this.service.deleteClub(id).subscribe(() => this.service.getAllClubs().subscribe((data) => {
        this.clubs = data}));
  }




}
