import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeBeforeAfter } from './home-before-after';

describe('HomeBeforeAfter', () => {
  let component: HomeBeforeAfter;
  let fixture: ComponentFixture<HomeBeforeAfter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBeforeAfter],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeBeforeAfter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 before/after projects', () => {
    expect(component.projects.length).toBe(3);
  });
});
