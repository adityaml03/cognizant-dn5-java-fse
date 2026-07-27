import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <-- Added RouterModule
import { CourseService } from '../../services/course';
import { CourseCardComponent } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, RouterModule, CourseCardComponent], // <-- Added RouterModule here
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {
  courses: any[] = [];
  isLoading: boolean = true;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    const result: any = this.courseService.getCourses();

    if (result && typeof result.subscribe === 'function') {
      result.subscribe({
        next: (data: any) => {
          this.courses = data;
          this.isLoading = false;
        },
        error: (err: any) => {
          console.error('Error fetching course list:', err);
          this.isLoading = false;
        }
      });
    } else {
      this.courses = result || [];
      this.isLoading = false;
    }
  }

  onEnroll(course: any): void {
    alert(`Enrolled in ${course.name} successfully!`);
  }
}