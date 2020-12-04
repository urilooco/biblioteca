import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CplibrosComponent } from './cplibros.component';

describe('CplibrosComponent', () => {
  let component: CplibrosComponent;
  let fixture: ComponentFixture<CplibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CplibrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CplibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
