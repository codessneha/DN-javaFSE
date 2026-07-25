import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { enrollmentReducer } from './store/enrollment/enrollment.reducer';

import { courseReducer } from './store/course/course.reducer';

import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';

import { CourseEffects } from './store/course/course.effects';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {

providers: [

provideRouter(routes),

provideStore({

  course: courseReducer,

  enrollment: enrollmentReducer

}),

provideEffects([CourseEffects]),

provideStoreDevtools({

maxAge:25

})

]

};