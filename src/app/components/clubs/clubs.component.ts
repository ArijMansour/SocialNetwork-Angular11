import { Component, OnInit } from '@angular/core';
import {ClubAddService} from '../club-add.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {
  clubs: any;
  constructor(private service: ClubAddService) { }

  ngOnInit(): void {
    let resp = this.service.getAllClubs();
    resp.subscribe(( data) => this.clubs = data);
  }

}
