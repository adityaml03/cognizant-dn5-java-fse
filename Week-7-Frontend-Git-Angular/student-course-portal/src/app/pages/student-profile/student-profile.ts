import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-profile.html', // Fixed filename reference
  styleUrl: './student-profile.css'
})
export class StudentProfile implements OnInit { // Fixed class name export
  enrolledCourses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.enrolledCourses = this.courseService.getEnrolledCourses();
  }
}