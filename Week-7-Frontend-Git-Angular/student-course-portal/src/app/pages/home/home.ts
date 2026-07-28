// src/app/pages/home/home.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  portalName: string = 'Digital Nurture Portal';
  isPortalActive: boolean = true;
  message: string = '';
  searchTerm: string = '';
  courseCount: number = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (courses: Course[]) => this.courseCount = courses.length,
      error: (err: unknown) => console.error('Failed to fetch home courses:', err)
    });
  }

  onEnrollClick(): void {
    this.message = 'Enrollment requested!';
  }
}