import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Course } from '../../models/course.model';
import { enrollInCourse, unenrollFromCourse } from '../../store/enrollment/enrollment.actions';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card h-100 shadow-sm">
      <div class="card-body">
        <h5 class="card-title">{{ course.name }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">
          {{ course.code }} <span *ngIf="course.credits">({{ course.credits }} Credits)</span>
        </h6>
        <p class="card-text">{{ course.description }}</p>
        <p class="text-secondary small">Instructor: {{ course.instructor }}</p>
        
        <button 
          class="btn"
          [ngClass]="(isEnrolled$ | async) ? 'btn-outline-danger' : 'btn-primary'"
          (click)="toggleEnrollment()">
          {{ (isEnrolled$ | async) ? 'Unenroll' : 'Enroll' }}
        </button>
      </div>
    </div>
  `
})
export class CourseCardComponent {
  @Input({ required: true }) course!: Course;

  private store = inject(Store);

  get isEnrolled$(): Observable<boolean> {
    return this.store.select(selectEnrolledIds).pipe(
      map(ids => ids.includes(this.course.id))
    );
  }

  toggleEnrollment(): void {
    this.store.select(selectEnrolledIds).pipe(take(1)).subscribe(ids => {
      if (ids.includes(this.course.id)) {
        this.store.dispatch(unenrollFromCourse({ courseId: this.course.id }));
      } else {
        this.store.dispatch(enrollInCourse({ courseId: this.course.id }));
      }
    });
  }
}