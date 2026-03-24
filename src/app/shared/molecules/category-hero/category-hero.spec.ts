import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryHero } from './category-hero';

describe('CategoryHero', () => {
  let component: CategoryHero;
  let fixture: ComponentFixture<CategoryHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryHero],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
