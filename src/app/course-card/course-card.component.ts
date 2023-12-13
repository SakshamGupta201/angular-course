import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  @Input({ required: true }) course: Course;
  @Output() courseSelected = new EventEmitter<Course>();

  onCourseViewed() {
    console.log("Clicked");
    this.courseSelected.emit(this.course);
  }

  cardClasses() {
    if (this.course.category === 'BEGINNER') {
      return 'beginner'
    }
  }

  courseTitleStyles() {
    if (this.course.id = 1000) {
      return {
        'background': 'url("course.iconUrl") no-repeat center / cover'
      }
    }
  }
}
