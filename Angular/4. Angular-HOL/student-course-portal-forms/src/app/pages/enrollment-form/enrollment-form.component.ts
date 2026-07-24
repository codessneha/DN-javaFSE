import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment-form.component.html',
  styleUrl: './enrollment-form.component.css'
})
export class EnrollmentFormComponent {

  submitted = false;

  student = {
    studentName: '',
    studentEmail: '',
    courseId: null as number | null,
    preferredSemester: '',
    agreeToTerms: false
  };

  onSubmit(form: NgForm) {
    console.log('Form Value:', form.value);
    console.log('Form Valid:', form.valid);

    this.submitted = true;
  }

}