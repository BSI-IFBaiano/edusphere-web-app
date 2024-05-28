import { Component, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback-card.component.html',
  styleUrl: './feedback-card.component.css'
})
export class FeedbackCardComponent {
  @Input() image?: string;
  @Input() feedback: string = '';
  @Input() name: string = '';
  @Input() job?: string;
  @Input() company?: string;
}
