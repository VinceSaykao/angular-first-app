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
  serverCreationStatus = 'No clicks was created';

  // method created by angular
  constructor() { 

    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }

  ngOnInit(): void {
  }

  // creating new method, starting with "on"
  onCreateServer() {
    this.serverCreationStatus = 'Server was created';

  }

}
