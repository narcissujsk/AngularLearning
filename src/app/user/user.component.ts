import { Component, OnInit , Input } from '@angular/core';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() name: string;
  names: string[];
  constructor() {
    // this.name = 'jsk';
    // this.names = ['name1', 'name2'];
  }

  ngOnInit() {
  }

}
