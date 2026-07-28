// src/app/pages/student-profile/student-profile.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course';
@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-profile.html',
  styleUrls: ['./student-profile.css']
})
export class StudentProfile implements OnInit {
  enrolledCourses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    const enrolledIds: (string | number)[] = this.courseService.getEnrolledCourses();

    if (!enrolledIds || enrolledIds.length === 0) {
      this.enrolledCourses = [];
      return;
    }

    // Map IDs to course observable requests
    const courseRequests = enrolledIds.map((id: string | number) => 
      this.courseService.getCourseById(id)
    );

    // Fetch all courses simultaneously
    forkJoin<Course[]>(courseRequests).subscribe({
      next: (courses: Course[]) => {
        this.enrolledCourses = courses;
      },
      error: (err) => console.error('Error fetching enrolled courses:', err)
    });
  }
}