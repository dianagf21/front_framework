import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarRegistroComponent } from './consultar-registro.component';

describe('ConsultarRegistroComponent', () => {
  let component: ConsultarRegistroComponent;
  let fixture: ComponentFixture<ConsultarRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
