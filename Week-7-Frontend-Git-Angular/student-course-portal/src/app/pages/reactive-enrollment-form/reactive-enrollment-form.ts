import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentFormComponent implements OnInit {

  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.enrollForm = this.fb.group({

      studentName: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      studentEmail: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      courseId: [
        '',
        [
          Validators.required,
          this.noCourseCode
        ]
      ],

      preferredSemester: [
        'Odd',
        Validators.required
      ],

      agreeToTerms: [
        false,
        Validators.requiredTrue
      ],

      additionalCourses: this.fb.array([])

    });

    // Async validator for email
    this.enrollForm.get('studentEmail')?.addAsyncValidators(
      this.simulateEmailCheck.bind(this)
    );

  }

  /*
   value() excludes disabled controls.
   getRawValue() includes disabled controls.
  */

  noCourseCode(control: AbstractControl): ValidationErrors | null {

    const value = control.value;

    if (value && value.toString().startsWith('XX')) {
      return {
        noCourseCode: true
      };
    }

    return null;
  }

  simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {

    return new Promise((resolve) => {

      setTimeout(() => {

        if (control.value && control.value.includes('test@')) {

          resolve({
            emailTaken: true
          });

        } else {

          resolve(null);

        }

      }, 800);

    });

  }

  get additionalCourses(): FormArray<FormControl> {

    return this.enrollForm.get('additionalCourses') as FormArray<FormControl>;

  }

  addCourse(): void {

    this.additionalCourses.push(

      this.fb.control(
        '',
        Validators.required
      )

    );

  }

  removeCourse(index: number): void {

    this.additionalCourses.removeAt(index);

  }

  submit(): void {

    console.log(this.enrollForm.value);

    console.log(this.enrollForm.getRawValue());

  }

}