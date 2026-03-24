import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutMissionVision } from './about-mission-vision';

describe('AboutMissionVision', () => {
  let component: AboutMissionVision;
  let fixture: ComponentFixture<AboutMissionVision>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMissionVision],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutMissionVision);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
