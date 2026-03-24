import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeFeaturedProjects } from './home-featured-projects';

describe('HomeFeaturedProjects', () => {
  let component: HomeFeaturedProjects;
  let fixture: ComponentFixture<HomeFeaturedProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFeaturedProjects],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeFeaturedProjects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
