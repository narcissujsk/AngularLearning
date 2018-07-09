import {Component, OnInit, ReflectiveInjector} from '@angular/core';

@Component({
  selector: 'app-users',
  template: `<p>
    users works</p>
  <hr>
  <button (click)="invokService()"> get values</button>
  <hr>
  <ul>
    <app-user *ngFor="let value of names" [name]="value"></app-user>
  </ul>
  `,
  styleUrls: []
})
export class UsersComponent implements OnInit {
  names: string[];
  myservice: MyUsersService;
  constructor() {
    this.names = ['name1', 'name2'];
  }

  invokService(): void {
    console.info("invokService");
   // let injector: any = ReflectiveInjector.resolveAndCreate([MyUsersService]);
    var injector = ReflectiveInjector.resolveAndCreate([MyUsersService]);
    this.myservice = injector.get(MyUsersService);
    console.info( this.myservice.getValue());
  }

  ngOnInit() {
  }

}

export class MyUsersService {
  getValue(): string {
    return "value is sth";
  }

}

