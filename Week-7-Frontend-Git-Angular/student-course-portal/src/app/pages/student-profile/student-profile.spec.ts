import { TestBed } from '@angular/core/testing';
import { StudentProfileComponent } from './student-profile';
import { provideMockStore } from '@ngrx/store/testing';

describe('StudentProfile', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentProfileComponent],
      providers: [provideMockStore({})]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(StudentProfileComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});