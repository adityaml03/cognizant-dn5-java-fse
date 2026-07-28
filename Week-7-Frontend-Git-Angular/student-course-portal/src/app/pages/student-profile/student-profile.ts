import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from '../../models/course.model';
import { selectEnrolledCourses } from '../../store/enrollment/enrollment.selectors';
import { CourseCardComponent } from '../../components/course-card/course-card';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  template: `
    <div class="container my-4">
      <h2>User Profile</h2>
      <h3>Enrolled Courses</h3>

      <ng-container *ngIf="enrolledCourses$ | async as enrolledCourses">
        <div *ngIf="enrolledCourses.length === 0" class="alert alert-warning">
          You haven't enrolled in any courses yet.
        </div>

        <div class="row" *ngIf="enrolledCourses.length > 0">
          <div class="col-md-4 mb-3" *ngFor="let course of enrolledCourses">
            <app-course-card [course]="course"></app-course-card>
          </div>
        </div>
      </ng-container>
    </div>
  `
})
export class StudentProfileComponent {
  private store = inject(Store);

  // Cross-slice selector automatically combines Course data + Enrolled IDs!
  enrolledCourses$: Observable<Course[]> = this.store.select(selectEnrolledCourses);
}

// Alias export to satisfy imports expecting 'StudentProfile'
export { StudentProfileComponent as StudentProfile };