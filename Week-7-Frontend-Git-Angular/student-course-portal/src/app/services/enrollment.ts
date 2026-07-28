import { Injectable } from '@angular/core';
import { CourseService } from './course';
import { Course } from '../models/course.model';
import { Observable, forkJoin, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private enrolledCourseIds: (string | number)[] = [];

  constructor(private courseService: CourseService) {}

  enroll(courseId: string | number): void {
    if (!this.enrolledCourseIds.includes(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }
  }

  getEnrolledCourses(): Observable<Course[]> {
    if (this.enrolledCourseIds.length === 0) {
      return of([]);
    }
    const requests = this.enrolledCourseIds.map(id => this.courseService.getCourseById(id));
    return forkJoin(requests);
  }
}