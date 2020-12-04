import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClibrosComponent } from './clibros.component';

describe('ClibrosComponent', () => {
  let component: ClibrosComponent;
  let fixture: ComponentFixture<ClibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClibrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
