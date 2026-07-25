import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Course } from '../models/course.model';

@Injectable({

providedIn:'root'

})

export class CourseService{

private courses:Course[]=[

{

id:1,

name:'Angular',

code:'CS101',

credits:4,

gradeStatus:'passed'

},

{

id:2,

name:'Java',

code:'CS102',

credits:3,

gradeStatus:'pending'

},

{

id:3,

name:'Spring Boot',

code:'CS103',

credits:4,

gradeStatus:'failed'

}

];

getCourses():Observable<Course[]>{

return of(this.courses);

}

}