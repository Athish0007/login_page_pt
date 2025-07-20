import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeftDashboardComponent } from './left-dashboard.component';

describe('LeftDashboardComponent', () => {
  let component: LeftDashboardComponent;
  let fixture: ComponentFixture<LeftDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeftDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the left dashboard component', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Rainfall" and "Heatwave" sections', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.info-box h3')?.textContent).toContain('Rainfall');
    const heatwaveBoxes = compiled.querySelectorAll('.info-box');
    // Assuming Heatwave is the second info-box
    expect(heatwaveBoxes[1].querySelector('h3')?.textContent).toContain('Heatwave');
  });

  it('should display "Latest" and "More Info" sections', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const latestBox = compiled.querySelector('.latest-box h3');
    expect(latestBox?.textContent).toContain('Latest');
    const moreInfoBox = compiled.querySelectorAll('.info-box')[3]; // Assuming More Info is the 4th box
    expect(moreInfoBox.querySelector('h3')?.textContent).toContain('More Info');
  });

  it('should have rainfall data with badges', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const rainfallBox = compiled.querySelector('.info-box');
    expect(rainfallBox?.querySelectorAll('li').length).toBeGreaterThan(0);
    expect(rainfallBox?.querySelector('.badge.rainfall')).toBeTruthy();
  });
});