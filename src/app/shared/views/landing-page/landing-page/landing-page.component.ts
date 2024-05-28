import { Component } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { SimpleCardComponent } from '../../../components/simple-card/simple-card.component';
import { CourseCardComponent } from '../../../components/course-card/course-card.component';
import { FeedbackCardComponent } from '../../../components/feedback-card/feedback-card.component';
import { HeaderComponent } from '../header/header.component';
import { SectionOneComponent } from '../section-one/section-one.component';
import { SectionTwoComponent } from '../section-two/section-two.component';
import { CommonModule } from '@angular/common';
import { SectionThreeComponent } from "../section-three/section-three.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.css',
    imports: [ButtonComponent, SimpleCardComponent, CommonModule, CourseCardComponent, FeedbackCardComponent, HeaderComponent, SectionOneComponent, SectionTwoComponent, SectionThreeComponent, FooterComponent]
})
export class LandingPageComponent {

  constructor() { }

  title = 'Landing Page';
}
