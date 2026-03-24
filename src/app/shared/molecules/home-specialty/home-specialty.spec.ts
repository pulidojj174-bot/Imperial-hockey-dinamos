import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeSpecialty } from './home-specialty';

describe('HomeSpecialty', () => {
  let component: HomeSpecialty;
  let fixture: ComponentFixture<HomeSpecialty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSpecialty],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeSpecialty);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
