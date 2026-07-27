import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: Course[] = [

    {
      id: 1,
      name: 'Java Programming',
      code: 'CS101',
      credits: 4,
      gradeStatus: 'passed',
      enrolled: true
    },

    {
      id: 2,
      name: 'Angular Development',
      code: 'CS202',
      credits: 3,
      gradeStatus: 'failed',
      enrolled: false
    },

    {
      id: 3,
      name: 'Database Systems',
      code: 'CS303',
      credits: 4,
      gradeStatus: 'pending',
      enrolled: false
    },

    {
      id: 4,
      name: 'Operating Systems',
      code: 'CS304',
      credits: 3,
      gradeStatus: 'passed',
      enrolled: true
    },

    {
      id: 5,
      name: 'Computer Networks',
      code: 'CS305',
      credits: 2,
      gradeStatus: 'pending',
      enrolled: false
    }

  ];

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(c => c.id === id);
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }

}