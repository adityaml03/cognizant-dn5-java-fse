import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap, retry, switchMap } from 'rxjs/operators';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/courses';
  private enrolledCourseIds: Set<number | string> = new Set();

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
      retry(2),
      map((courses: Course[]) => courses.filter(c => (c.credits ?? 1) > 0)),
      tap((courses: Course[]) => console.log('Courses loaded:', courses.length)),
      catchError(err => {
        console.error('API Error:', err);
        return throwError(() => new Error('Failed to load courses. Please try again.'));
      })
    );
  }

  getCourseById(id: number | string): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`).pipe(
      retry(2),
      catchError(err => {
        console.error('API Error:', err);
        return throwError(() => new Error(`Failed to load course #${id}.`));
      })
    );
  }

  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course);
  }

  updateCourse(id: number | string, course: Partial<Course>): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${id}`, course);
  }

  deleteCourse(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getEnrolledStudentsForCourse(courseId$: Observable<number | string>): Observable<any> {
    return courseId$.pipe(
      switchMap(id => this.http.get(`http://localhost:3000/enrollments?courseId=${id}`))
    );
  }

  toggleEnrollment(courseId: number | string): boolean {
    if (this.enrolledCourseIds.has(courseId)) {
      this.enrolledCourseIds.delete(courseId);
      return false;
    } else {
      this.enrolledCourseIds.add(courseId);
      return true;
    }
  }

  isEnrolled(courseId: number | string): boolean {
    return this.enrolledCourseIds.has(courseId);
  }

  getEnrolledCourses(): (number | string)[] {
    return Array.from(this.enrolledCourseIds);
  }
}