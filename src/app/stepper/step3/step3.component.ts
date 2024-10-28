import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [],
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component {
  @Output() proceed = new EventEmitter<void>();  // Emits event to go to Step 4
}
