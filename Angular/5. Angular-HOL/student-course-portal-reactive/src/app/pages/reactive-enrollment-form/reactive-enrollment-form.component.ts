import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './reactive-enrollment-form.component.html',
  styleUrl: './reactive-enrollment-form.component.css'
})
export class ReactiveEnrollmentFormComponent {

  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {

    this.enrollForm = this.fb.group({

      studentName: ['', [Validators.required, Validators.minLength(3)]],

      studentEmail: ['', [Validators.required, Validators.email]],

      courseId: [null, Validators.required],

      preferredSemester: ['Odd', Validators.required],

      agreeToTerms: [false, Validators.requiredTrue]

    });

  }

  onSubmit() {

    console.log(this.enrollForm.value);

    console.log(this.enrollForm.getRawValue());

  }

}