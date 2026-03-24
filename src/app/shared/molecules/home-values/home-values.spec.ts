import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeValues } from './home-values';

describe('HomeValues', () => {
  let component: HomeValues;
  let fixture: ComponentFixture<HomeValues>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeValues],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeValues);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
