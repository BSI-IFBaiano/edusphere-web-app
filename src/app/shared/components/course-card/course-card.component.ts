import { Component, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input() image?: string;
  @Input() title: string = '';
  @Input() type: string = '';
}
