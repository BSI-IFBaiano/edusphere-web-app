import { Component } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { SimpleCardComponent } from '../../../components/simple-card/simple-card.component';
import { CourseCardComponent } from '../../../components/course-card/course-card.component';
import { FeedbackCardComponent } from '../../../components/feedback-card/feedback-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ButtonComponent, SimpleCardComponent, CommonModule, CourseCardComponent, FeedbackCardComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  constructor() { }

  title = 'Landing Page';
}
