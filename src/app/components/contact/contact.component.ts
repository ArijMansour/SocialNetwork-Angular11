import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  

  constructor(private router: Router , private route:ActivatedRoute ) { }

  ngOnInit(): void {
  }

  showchatbot() {
    this.router.navigate(['chatbot'] , {relativeTo:this.route} ) ;
  }

  showmail() {
    this.router.navigate(['mail'] , {relativeTo:this.route} ) ;
  }


}
