import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adminspace',
  templateUrl: './adminspace.component.html',
  styleUrls: ['./adminspace.component.css']
})
export class AdminspaceComponent implements OnInit {

  constructor(private router: Router , private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  showdashboard() {
    this.router.navigate(['dashboard'] , {relativeTo:this.route} ) ;
  }

  showdactivity() {
    this.router.navigate(['activity'] , {relativeTo:this.route} ) ;
  }

  shownotif() {
    this.router.navigate(['notification'] , {relativeTo:this.route} ) ;
  }

 

}
