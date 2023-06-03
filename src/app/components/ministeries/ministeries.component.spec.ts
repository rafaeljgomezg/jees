import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinisteriesComponent } from './ministeries.component';

describe('MinisteriesComponent', () => {
  let component: MinisteriesComponent;
  let fixture: ComponentFixture<MinisteriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinisteriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinisteriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
