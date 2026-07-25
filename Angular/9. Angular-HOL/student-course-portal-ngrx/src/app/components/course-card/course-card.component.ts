import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import {

enrollInCourse,

unenrollFromCourse

} from '../../store/enrollment/enrollment.actions';

import {

selectEnrolledIds

} from '../../store/enrollment/enrollment.selectors';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  enrolledIds$!: Observable<number[]>;

constructor(

private store: Store

){

this.enrolledIds$ =

this.store.select(selectEnrolledIds);

}
toggleEnrollment(courseId: number, enrolledIds: number[]) {

  if (enrolledIds.includes(courseId)) {

    this.store.dispatch(
      unenrollFromCourse({ courseId })
    );

  } else {

    this.store.dispatch(
      enrollInCourse({ courseId })
    );

  }

}
}
