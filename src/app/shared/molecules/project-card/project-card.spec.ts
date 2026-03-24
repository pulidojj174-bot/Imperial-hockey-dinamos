import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectCard } from './project-card';

describe('ProjectCard', () => {
  let component: ProjectCard;
  let fixture: ComponentFixture<ProjectCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCard);
    fixture.componentRef.setInput('project', {
      id: 'test-1',
      name: 'Proyecto Test',
      type: 'dinamos',
      typeLabel: 'Dínamo',
      description: 'Test description',
      image: 'assets/images/projects/proyecto-dinamo-1.jpg',
      imageAlt: 'Proyecto test',
      materials: ['Madera'],
      customization: 'Test custom',
      designStory: 'Test story',
      result: 'Test result',
    });
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
