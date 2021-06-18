import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtracurriculumComponent } from './extracurriculum.component';

describe('ExtracurriculumComponent', () => {
  let component: ExtracurriculumComponent;
  let fixture: ComponentFixture<ExtracurriculumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtracurriculumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtracurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
