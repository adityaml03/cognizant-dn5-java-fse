import { Routes, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

// 1. Existing Page Components (Check your exact class names & paths if different)
import { Home } from './pages/home/home'; 
import { CourseList } from './pages/course-list/course-list';
import { CourseDetailComponent } from './pages/course-detail/course-detail';
import { StudentProfile } from './pages/student-profile/student-profile';

// 2. Guards
import { authGuard } from './guards/auth-guard';
import { unsavedChangesGuard } from './guards/unsaved-changes-guard';

// 3. Layout and 404 Placeholders (Required by Task 1)
@Component({ 
  standalone: true, 
  imports: [RouterOutlet], 
  template: `<router-outlet></router-outlet>` 
})
export class CoursesLayoutComponent {}

@Component({ 
  standalone: true, 
  template: `
    <div style="padding: 2rem; text-align: center;">
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </div>
  ` 
})
export class NotFoundComponent {}

export const routes: Routes = [
  // Home Page (Restored to original Home component)
  { path: '', component: Home },

  // Task 1: Nested Courses Routes
  { 
    path: 'courses', 
    component: CoursesLayoutComponent,
    children: [
      { path: '', component: CourseList },
      { path: ':id', component: CourseDetailComponent }
    ]
  },

  // Task 2: Protected Profile Route
  { 
    path: 'profile', 
    component: StudentProfile, 
    canActivate: [authGuard] 
  },

  // Task 2: Lazy Loaded Enrollment Route with Guards
  { 
    path: 'enroll', 
    loadComponent: () => 
      import('./pages/reactive-enrollment-form/reactive-enrollment-form')
        .then(m => m.ReactiveEnrollmentFormComponent),
    canActivate: [authGuard],
    canDeactivate: [unsavedChangesGuard]
  },

  // Task 1: Wildcard 404 Route (Must be last)
  { path: '**', component: NotFoundComponent }
];