import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  MenuItems: any[] = [
    { id: 1, name: 'Home', route: "" },
    { id: 2, name: 'Personen', route: "persons" },
    { id: 3, name: 'Kalendar', route: "calendar" },
  ];

  ngOnInit() {
  }

}
