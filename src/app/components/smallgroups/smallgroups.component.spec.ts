import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallgroupsComponent } from './smallgroups.component';

describe('SmallgroupsComponent', () => {
  let component: SmallgroupsComponent;
  let fixture: ComponentFixture<SmallgroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallgroupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallgroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
