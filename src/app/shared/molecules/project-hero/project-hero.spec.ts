import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectHero } from './project-hero';

describe('ProjectHero', () => {
  let component: ProjectHero;
  let fixture: ComponentFixture<ProjectHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectHero],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
