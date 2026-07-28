import { ComponentFixture, TestBed } from '@angular/core/testing'; // Standard Angular imports
import { By } from '@angular/platform-browser';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CourseListComponent } from './course-list';
import { Course } from '../../models/course.model';

describe('CourseListComponent (NgRx Connected)', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let store: MockStore;

  const mockCourses: Course[] = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, duration: '12 Weeks', description: 'DS course', instructor: 'Dr. Smith' },
    { id: 2, name: 'Algorithms', code: 'CS102', credits: 3, duration: '10 Weeks', description: 'Algo course', instructor: 'Dr. Jones' }
  ];

  const initialState = {
    course: {
      courses: mockCourses,
      loading: false,
      error: null
    },
    enrollment: {
      enrolledCourseIds: []
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseListComponent],
      providers: [
        provideMockStore({ initialState })
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
  });

  it('should create component and render courses from store state', () => {
    fixture.detectChanges();

    const courseCards = fixture.debugElement.queryAll(By.css('app-course-card'));
    expect(courseCards.length).toBe(2);
  });

  it('should render loading indicator when store loading state is true', () => {
    store.setState({
      course: {
        courses: [],
        loading: true,
        error: null
      },
      enrollment: {
        enrolledCourseIds: []
      }
    });

    fixture.detectChanges();

    const loadingAlert = fixture.debugElement.query(By.css('.alert-info'));
    expect(loadingAlert).toBeTruthy();
    expect(loadingAlert.nativeElement.textContent).toContain('Loading courses...');
  });
});