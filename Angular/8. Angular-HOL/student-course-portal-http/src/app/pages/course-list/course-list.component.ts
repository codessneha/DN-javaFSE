import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { CourseService } from '../../services/course.service';

import { Course } from '../../models/course.model';

@Component({

  selector: 'app-course-list',

  standalone: true,

  imports: [

    CommonModule

  ],

  templateUrl: './course-list.component.html',

  styleUrl: './course-list.component.css'

})

export class CourseListComponent {

  courses: Course[] = [];

  errorMessage = '';

  isLoading = true;

  constructor(

    private courseService: CourseService

  ) {}
  addCourse() {

  const newCourse = {

    name: 'Spring Boot',

    code: 'CS106',

    credits: 4,

    gradeStatus: 'pending' as const

  };

  this.courseService.createCourse(newCourse).subscribe({

    next: (course) => {

      console.log('Course Added');

      console.log(course);

      this.courses.push(course);

    },

    error: (err) => {

      console.log(err);

    }

  });

}

  ngOnInit() {

    this.courseService.getCourses().subscribe({

      next: (courses) => {

        this.courses = courses;

      },

      error: (err) => {

        this.errorMessage = err.message;

      },

      complete: () => {

        this.isLoading = false;

      }

    });
    

  }

}