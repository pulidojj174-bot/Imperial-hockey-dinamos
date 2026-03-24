import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectDetail } from './project-detail';

describe('ProjectDetail', () => {
  let component: ProjectDetail;
  let fixture: ComponentFixture<ProjectDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectDetail);
    fixture.componentRef.setInput('project', {
      id: 'test-1',
      name: 'Proyecto Test',
      type: 'dinamos',
      typeLabel: 'Dínamo',
      description: 'Test description',
      image: 'assets/images/projects/proyecto-dinamo-1.jpg',
      imageAlt: 'Proyecto test',
      materials: ['Madera de roble', 'Paño profesional'],
      customization: 'Grabado personalizado con iniciales',
      designStory: 'Historia de diseño de prueba',
      result: 'Resultado final de prueba',
    });
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
