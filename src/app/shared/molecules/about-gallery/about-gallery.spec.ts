import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutGallery } from './about-gallery';

describe('AboutGallery', () => {
  let component: AboutGallery;
  let fixture: ComponentFixture<AboutGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutGallery],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutGallery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
