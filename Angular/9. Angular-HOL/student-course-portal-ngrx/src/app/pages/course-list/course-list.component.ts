import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { Course } from '../../models/course.model';

import { selectAllCourses } from '../../store/course/course.selectors';

import { loadCourses } from '../../store/course/course.actions';

@Component({

selector:'app-course-list',

standalone:true,

imports:[CommonModule],

templateUrl:'./course-list.component.html',

styleUrl:'./course-list.component.css'

})

export class CourseListComponent implements OnInit{

courses$!:Observable<Course[]>;

constructor(private store:Store){}

ngOnInit(){

this.courses$=

this.store.select(selectAllCourses);

this.store.dispatch(loadCourses());

}

}