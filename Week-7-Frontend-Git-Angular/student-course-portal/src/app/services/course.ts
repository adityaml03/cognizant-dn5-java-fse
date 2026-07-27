import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [
    { id: 1, name: 'Angular Fundamentals', code: 'CS101', credits: 3, gradeStatus: 'passed', enrolled: false },
    { id: 2, name: 'Web Development Basics', code: 'CS102', credits: 4, gradeStatus: 'pending', enrolled: false },
    { id: 3, name: 'Database Management', code: 'CS103', credits: 3, gradeStatus: 'pending', enrolled: false },
    { id: 4, name: 'Data Structures & Algorithms', code: 'CS104', credits: 4, gradeStatus: 'failed', enrolled: false },
    { id: 5, name: 'Software Engineering', code: 'CS105', credits: 3, gradeStatus: 'pending', enrolled: false }
  ];

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(c => c.id === id);
  }

  // Toggle enrollment property directly
  toggleEnrollment(courseId: number): boolean {
    const course = this.courses.find(c => c.id === courseId);
    if (course) {
      course.enrolled = !course.enrolled;
      return course.enrolled;
    }
    return false;
  }

  isEnrolled(courseId: number): boolean {
    const course = this.courses.find(c => c.id === courseId);
    return course ? course.enrolled : false;
  }

  // Filters courses where enrolled === true for the Student Profile page
  getEnrolledCourses(): Course[] {
    return this.courses.filter(course => course.enrolled);
  }
}