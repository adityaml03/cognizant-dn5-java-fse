// src/app/pages/course-list/course-list.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrls: ['./course-list.css']
})
export class CourseList implements OnInit {
  courses: Course[] = [];
  isLoading: boolean = true;
  enrolledIds: Set<number | string> = new Set();

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.isLoading = true;
    this.courseService.getCourses().subscribe({
      next: (data: Course[]) => {
        this.courses = data || [];
        this.syncEnrolledState();
        this.isLoading = false;
      },
      error: (err: unknown) => {
        console.error('Error fetching courses:', err);
        this.isLoading = false;
      }
    });
  }

  syncEnrolledState(): void {
    this.enrolledIds = new Set(this.courseService.getEnrolledCourses());
  }

  isCourseEnrolled(courseId: number | string): boolean {
    return this.enrolledIds.has(courseId);
  }

  onEnroll(courseId: number | string): void {
    this.courseService.toggleEnrollment(courseId);
    this.syncEnrolledState(); // Re-creates the Set reference so Angular updates [isEnrolled]
  }
}