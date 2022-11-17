import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  smoothScroll(id: any){
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    });
  }

}
