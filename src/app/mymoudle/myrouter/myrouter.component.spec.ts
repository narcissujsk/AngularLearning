import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrouterComponent } from './myrouter.component';

describe('MyrouterComponent', () => {
  let component: MyrouterComponent;
  let fixture: ComponentFixture<MyrouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyrouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyrouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
