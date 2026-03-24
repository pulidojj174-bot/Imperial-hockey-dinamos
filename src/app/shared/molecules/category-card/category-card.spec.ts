import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryCard } from './category-card';

describe('CategoryCard', () => {
  let component: CategoryCard;
  let fixture: ComponentFixture<CategoryCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryCard],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryCard);
    fixture.componentRef.setInput('category', {
      title: 'Test Category',
      description: 'Test description',
      image: 'assets/images/categories/dinamos/dinamo-1.jpg',
      imageAlt: 'Test alt',
      featured: false,
      designs: ['Design 1'],
      customizations: ['Option 1'],
    });
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
