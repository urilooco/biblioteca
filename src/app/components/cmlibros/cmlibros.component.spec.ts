import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmlibrosComponent } from './cmlibros.component';

describe('CmlibrosComponent', () => {
  let component: CmlibrosComponent;
  let fixture: ComponentFixture<CmlibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmlibrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmlibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
