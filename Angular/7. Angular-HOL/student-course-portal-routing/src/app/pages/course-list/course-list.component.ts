import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';

import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {

  courses: Course[] = [];

  filteredCourses: Course[] = [];

  searchTerm = '';

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    // Load all courses from service
    this.courses = this.courseService.getCourses();

    // Initially display all courses
    this.filteredCourses = this.courses;

    // Read search query parameter
    const search = this.route.snapshot.queryParamMap.get('search');

    if (search) {
      this.searchTerm = search;
      this.searchCourses();
    }
  }

  // Search courses
  searchCourses(): void {

    // Update URL
    this.router.navigate(['/courses'], {
      queryParams: {
        search: this.searchTerm
      }
    });

    // Filter list
    this.filteredCourses = this.courses.filter(course =>
      course.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Open course detail page
  openCourse(course: Course): void {
    this.router.navigate(['/courses', course.id]);
  }

}