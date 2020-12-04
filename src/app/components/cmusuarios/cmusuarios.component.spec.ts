import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmusuariosComponent } from './cmusuarios.component';

describe('CmusuariosComponent', () => {
  let component: CmusuariosComponent;
  let fixture: ComponentFixture<CmusuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmusuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
