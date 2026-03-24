import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryGallery } from './category-gallery';

describe('CategoryGallery', () => {
  let component: CategoryGallery;
  let fixture: ComponentFixture<CategoryGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryGallery],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryGallery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
