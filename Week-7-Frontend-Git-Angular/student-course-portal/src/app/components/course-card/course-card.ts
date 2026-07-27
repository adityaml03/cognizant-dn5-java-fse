import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCardComponent implements OnInit {
  @Input() course?: Course;
  isEnrolled: boolean = false;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    if (this.course) {
      this.isEnrolled = this.courseService.isEnrolled(this.course.id);
    }
  }

  onEnrollClick(): void {
    if (this.course) {
      this.isEnrolled = this.courseService.toggleEnrollment(this.course.id);
    }
  }
}