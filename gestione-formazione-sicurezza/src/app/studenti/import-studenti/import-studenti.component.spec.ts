import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportStudentiComponent } from './import-studenti.component';

describe('ImportStudentiComponent', () => {
  let component: ImportStudentiComponent;
  let fixture: ComponentFixture<ImportStudentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportStudentiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImportStudentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
