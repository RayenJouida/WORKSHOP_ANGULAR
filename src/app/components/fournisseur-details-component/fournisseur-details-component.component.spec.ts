import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurDetailsComponentComponent } from './fournisseur-details-component.component';

describe('FournisseurDetailsComponentComponent', () => {
  let component: FournisseurDetailsComponentComponent;
  let fixture: ComponentFixture<FournisseurDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournisseurDetailsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FournisseurDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
