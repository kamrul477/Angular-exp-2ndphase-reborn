import { Component } from '@angular/core';

@Component({
  selector: 'pm-app',
  templateUrl:'app/app.component.html', 
  providers: []
})
export class AppComponent {
  pageTitle: string = 'ACME Product Management';
}
