import { Component } from '@angular/core';
import { SimpleCardComponent } from '../../../components/simple-card/simple-card.component';

@Component({
  selector: 'app-section-three',
  standalone: true,
  imports: [SimpleCardComponent],
  templateUrl: './section-three.component.html',
  styleUrl: './section-three.component.css'
})
export class SectionThreeComponent {

}
