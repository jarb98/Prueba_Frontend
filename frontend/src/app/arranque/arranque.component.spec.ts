/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArranqueComponent } from './arranque.component';

describe('ArranqueComponent', () => {
  let component: ArranqueComponent;
  let fixture: ComponentFixture<ArranqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArranqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArranqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
