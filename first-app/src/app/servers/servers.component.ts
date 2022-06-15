import { Component, OnInit } from '@angular/core';

@Component({
  // made into an attribute
  selector: '[app-servers]',
  template: `
  <app-server></app-server>
  <app-server></app-server>
  `,
  // templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],

})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
