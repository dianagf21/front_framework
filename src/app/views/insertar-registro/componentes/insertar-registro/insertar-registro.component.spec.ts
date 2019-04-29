import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarRegistroComponent } from './insertar-registro.component';

describe('InsertarRegistroComponent', () => {
  let component: InsertarRegistroComponent;
  let fixture: ComponentFixture<InsertarRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertarRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
