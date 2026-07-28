// src/app/components/course-card/course-card.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.html',
  styleUrls: ['./course-card.css']
})
export class CourseCard {
  @Input() course!: Course;
  @Input() isEnrolled: boolean = false;
  @Output() enroll = new EventEmitter<number | string>();

  onEnrollClick(): void {
    if (this.course?.id != null) {
      this.enroll.emit(this.course.id);
    }
  }
}