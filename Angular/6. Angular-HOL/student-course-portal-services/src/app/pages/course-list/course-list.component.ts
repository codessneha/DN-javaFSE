import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {

  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit() {

    this.courses = this.courseService.getCourses();

  }

}