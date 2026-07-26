import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { HighlightDirective } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    CommonModule,
    HighlightDirective,
    CreditLabelPipe
  ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCardComponent implements OnChanges {

  @Input() course: any;

  @Output()
  enrollRequested = new EventEmitter<number>();

  isExpanded = false;

  ngOnChanges(changes: SimpleChanges) {
    console.log(
      'Course changed:',
      changes['course']?.previousValue,
      '→',
      changes['course']?.currentValue
    );
  }

  get cardClasses() {
  return {
    'card--enrolled': this.course?.enrolled,
    'card--full': (this.course?.credits ?? 0) >= 4,
    expanded: this.isExpanded
  };
}

  get borderColor() {

  switch (this.course?.gradeStatus) {

    case 'passed':
      return 'green';

    case 'failed':
      return 'red';

    default:
      return 'gray';
  }
}

}