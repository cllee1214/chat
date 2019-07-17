import { Component, OnInit } from '@angular/core';
import Nav from './nav'
import NavData from './nav-data'
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  navItems: Nav[] = NavData
  constructor() { }

  ngOnInit() {
    console.log(this.navItems)
  }

}
