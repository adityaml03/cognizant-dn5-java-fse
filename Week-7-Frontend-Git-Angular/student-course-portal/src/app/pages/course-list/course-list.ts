import { Component } from '@angular/core';
import { CourseCardComponent } from '../../components/course-card/course-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  selectedCourseId: number | null = null;

  courses = [
    {
      id: 1,
      name: 'Java Programming',
      code: 'CS101',
      credits: 4
    },
    {
      id: 2,
      name: 'Angular Development',
      code: 'CS202',
      credits: 3
    },
    {
      id: 3,
      name: 'Database Systems',
      code: 'CS303',
      credits: 4
    },
    {
      id: 4,
      name: 'Operating Systems',
      code: 'CS304',
      credits: 3
    },
    {
      id: 5,
      name: 'Computer Networks',
      code: 'CS305',
      credits: 4
    }
  ];

  onEnroll(courseId: number) {
    console.log('Enrolling in course:', courseId);
    this.selectedCourseId = courseId;
  }

}