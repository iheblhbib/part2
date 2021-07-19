import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgyptNewsComponent } from './egypt-news.component';

describe('EgyptNewsComponent', () => {
  let component: EgyptNewsComponent;
  let fixture: ComponentFixture<EgyptNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgyptNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EgyptNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
