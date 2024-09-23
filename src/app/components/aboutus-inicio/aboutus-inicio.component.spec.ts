import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusInicioComponent } from './aboutus-inicio.component';

describe('AboutusInicioComponent', () => {
  let component: AboutusInicioComponent;
  let fixture: ComponentFixture<AboutusInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutusInicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutusInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
