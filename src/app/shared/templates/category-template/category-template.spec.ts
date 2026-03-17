import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTemplate } from './category-template';

describe('CategoryTemplate', () => {
  let component: CategoryTemplate;
  let fixture: ComponentFixture<CategoryTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryTemplate],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryTemplate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
