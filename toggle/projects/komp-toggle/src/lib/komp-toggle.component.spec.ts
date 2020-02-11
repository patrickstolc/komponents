import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KompToggleComponent } from './komp-toggle.component';

describe('KompToggleComponent', () => {
  let component: KompToggleComponent;
  let fixture: ComponentFixture<KompToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KompToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KompToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
