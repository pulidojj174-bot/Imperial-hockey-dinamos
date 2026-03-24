import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectGallery } from './project-gallery';

describe('ProjectGallery', () => {
  let component: ProjectGallery;
  let fixture: ComponentFixture<ProjectGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectGallery],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectGallery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 9 projects', () => {
    expect(component.projects.length).toBe(9);
  });

  it('should filter projects by type', () => {
    component.onFilterChange('dinamos');
    expect(component.filteredProjects().length).toBe(3);
    expect(component.filteredProjects().every(p => p.type === 'dinamos')).toBe(true);
  });

  it('should show all projects when filter is todos', () => {
    component.onFilterChange('todos');
    expect(component.filteredProjects().length).toBe(9);
  });
});
