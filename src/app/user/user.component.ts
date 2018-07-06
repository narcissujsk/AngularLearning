import { Component, OnInit , Input } from '@angular/core';
@Component({
  selector: 'app-user',
  template: `<p>
  hello {{name}}
</p>
`,
  styleUrls: []
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
