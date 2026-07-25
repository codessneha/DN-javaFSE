import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-summary-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-summary-widget.component.html',
  styleUrl: './course-summary-widget.component.css'
})
export class CourseSummaryWidgetComponent {

  totalCourses = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit() {

    this.totalCourses = this.courseService.getCourses().length;

  }

  addCourse() {

    const newCourse: Course = {

      id: 6,

      name: 'Machine Learning',

      code: 'CS106',

      credits: 4,

      gradeStatus: 'pending'

    };

    this.courseService.addCourse(newCourse);

    this.totalCourses = this.courseService.getCourses().length;

  }

}