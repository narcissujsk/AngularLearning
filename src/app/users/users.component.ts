import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  template: `<p>
  users works!
</p>
<ul>
  <app-user *ngFor="let value of names" [name]="value"></app-user>
</ul>
`,
  styleUrls: []
})
export class UsersComponent implements OnInit {
  names: string[];
  constructor() {
    this.names = ['name1', 'name2'];
  }

  ngOnInit() {
  }

}
