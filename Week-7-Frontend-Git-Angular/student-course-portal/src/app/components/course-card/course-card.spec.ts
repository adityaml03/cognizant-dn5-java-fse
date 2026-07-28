import { ComponentFixture, TestBed } from '@angular/core/testing'; // Imported from @angular/core/testing
import { By } from '@angular/platform-browser';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { vi } from 'vitest';
import { CourseCardComponent } from './course-card';
import { Course } from '../../models/course.model';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;
  let store: MockStore;

  const mockCourse: Course = {
    id: 1,
    name: 'Data Structures',
    code: 'CS101',
    credits: 4,
    duration: '12 Weeks',
    description: 'Learn data structures',
    instructor: 'Dr. Smith'
  };

  const initialState = {
    enrollment: {
      enrolledCourseIds: []
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardComponent],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display course name', () => {
    component.course = mockCourse;
    fixture.detectChanges();

    const title = fixture.debugElement.query(By.css('.card-title')).nativeElement;
    expect(title.textContent).toContain('Data Structures');
  });

  it('should dispatch store action on click', () => {
    vi.spyOn(store, 'dispatch');
    component.course = mockCourse;
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('button'));
    button.nativeElement.click();

    expect(store.dispatch).toHaveBeenCalled();
  });
});