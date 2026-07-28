import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from '../../models/course.model';
import { loadCourses } from '../../store/course/course.actions';
import { selectAllCourses, selectCoursesLoading, selectCoursesError } from '../../store/course/course.selectors';
import { CourseCardComponent } from '../../components/course-card/course-card'; 

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  template: `
    <div class="container my-4">
      <h2>Available Courses</h2>

      <div *ngIf="loading$ | async" class="alert alert-info">Loading courses...</div>
      <div *ngIf="error$ | async as error" class="alert alert-danger">{{ error }}</div>

      <div class="row" *ngIf="courses$ | async as courses">
        <div class="col-md-4 mb-3" *ngFor="let course of courses">
          <app-course-card [course]="course"></app-course-card>
        </div>
      </div>
    </div>
  `
})
export class CourseListComponent implements OnInit {
  private store = inject(Store);

  courses$: Observable<Course[]> = this.store.select(selectAllCourses);
  loading$: Observable<boolean> = this.store.select(selectCoursesLoading);
  error$: Observable<string | null> = this.store.select(selectCoursesError);

  ngOnInit(): void {
    this.store.dispatch(loadCourses());
  }
}

// Alias export to satisfy route imports
export { CourseListComponent as CourseList };