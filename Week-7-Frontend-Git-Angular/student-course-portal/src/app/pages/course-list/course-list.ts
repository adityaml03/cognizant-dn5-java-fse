import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  isLoading = true;

  selectedCourseId: number | null = null;

  courses = [
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

  ngOnInit(): void {

  console.log("Before timeout:", this.isLoading);

  setTimeout(() => {
    this.isLoading = false;
    console.log("After timeout:", this.isLoading);
  }, 1500);

}

  // trackBy improves performance by reusing existing DOM elements instead of recreating them.

  trackByCourseId(index: number, course: any) {
    return course.id;
  }

  onEnroll(courseId: number) {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }

}