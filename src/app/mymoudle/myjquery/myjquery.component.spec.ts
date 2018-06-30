import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyjqueryComponent } from './myjquery.component';

describe('MyjqueryComponent', () => {
  let component: MyjqueryComponent;
  let fixture: ComponentFixture<MyjqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyjqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyjqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
