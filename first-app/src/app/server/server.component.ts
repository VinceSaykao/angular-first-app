import { Component } from '@angular/core';

// decorater enhance classes and elements to 
// Component decorator
// it knows this is typescript
// then pass javascript object to configure, without configuration its not good for angular 
// html tag selector should be a string 
@Component ({
    // each component needs to have a template
    selector: 'app-server', // can use this selector in other components
    templateUrl: './server.component.html',

})

export class ServerComponent {

}