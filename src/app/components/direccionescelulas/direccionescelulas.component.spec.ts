import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionescelulasComponent } from './direccionescelulas.component';

describe('DireccionescelulasComponent', () => {
  let component: DireccionescelulasComponent;
  let fixture: ComponentFixture<DireccionescelulasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DireccionescelulasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DireccionescelulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
