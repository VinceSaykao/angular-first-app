import { Component, OnInit } from '@angular/core';

@Component({
  // made into an attribute
  selector: '[app-servers]',

  //In-line template
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],

})
export class ServersComponent implements OnInit {

  // property holding a boolean value
  allowNewServer = false;

  constructor() { }

  ngOnInit(): void {
  }

}
