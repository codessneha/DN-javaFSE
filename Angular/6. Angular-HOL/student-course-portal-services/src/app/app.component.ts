import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { CourseSummaryWidgetComponent } from './components/course-summary-widget/course-summary-widget.component';
@Component({
  selector: 'app-root',
  imports:[RouterOutlet,HomeComponent,CourseListComponent,CourseSummaryWidgetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-course-portal-services';
}
