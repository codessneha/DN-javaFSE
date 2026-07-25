import { createAction, props } from '@ngrx/store';
import { Course } from '../../models/course.model';

// Load Courses
export const loadCourses = createAction(
  '[Course] Load Courses'
);

// Load Success
export const loadCoursesSuccess = createAction(
  '[Course] Load Courses Success',
  props<{ courses: Course[] }>()
);

// Load Failure
export const loadCoursesFailure = createAction(
  '[Course] Load Courses Failure',
  props<{ error: string }>()
);