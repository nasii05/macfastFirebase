import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddformComponent } from './addform.component';

describe('AddformComponent', () => {
  let component: AddformComponent;
  let fixture: ComponentFixture<AddformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
