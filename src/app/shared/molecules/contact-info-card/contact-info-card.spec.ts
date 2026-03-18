import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactInfoCard } from './contact-info-card';

describe('ContactInfoCard', () => {
  let component: ContactInfoCard;
  let fixture: ComponentFixture<ContactInfoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactInfoCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactInfoCard);
    fixture.componentRef.setInput('info', {
      icon: 'M2 2h20v20H2z',
      title: 'Test',
      lines: ['Line 1'],
    });
    await fixture.whenStable();
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
