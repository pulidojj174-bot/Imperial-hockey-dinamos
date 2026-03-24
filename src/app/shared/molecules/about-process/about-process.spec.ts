import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutProcess } from './about-process';

describe('AboutProcess', () => {
  let component: AboutProcess;
  let fixture: ComponentFixture<AboutProcess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutProcess],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutProcess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
