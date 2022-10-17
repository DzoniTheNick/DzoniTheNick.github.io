import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { navBarAnimation } from 'src/assets/animations';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    navBarAnimation
  ]
})
export class NavBarComponent implements OnInit {

  animationState: boolean = true;

  constructor(private router:Router) {
    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationEnd) {
        if(event.url == '/list' || event.url == '/compare' || event.url == '/convert'){
          this.animationState = true;
        }else{
          this.animationState = false;
        }
      }
    })
  }

  ngOnInit(): void {
  }
}
