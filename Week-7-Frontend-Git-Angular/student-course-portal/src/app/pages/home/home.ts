import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {

  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';

  courseCount = 0;

  constructor(private courseService: CourseService) {}

  // [property] is one-way binding (component → view)
  // [(ngModel)] is two-way binding (component ↔ view)

  ngOnInit() {

    console.log('HomeComponent initialised — courses loaded');

    this.courseCount = this.courseService.getCourses().length;

  }

  ngOnDestroy() {

    console.log('HomeComponent destroyed');

  }

  onEnrollClick() {

    this.message = 'Enrollment opened!';

  }

}