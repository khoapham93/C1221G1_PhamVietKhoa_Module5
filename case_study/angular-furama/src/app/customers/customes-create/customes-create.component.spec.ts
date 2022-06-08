import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomesCreateComponent } from './customes-create.component';

describe('CustomesCreateComponent', () => {
  let component: CustomesCreateComponent;
  let fixture: ComponentFixture<CustomesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
