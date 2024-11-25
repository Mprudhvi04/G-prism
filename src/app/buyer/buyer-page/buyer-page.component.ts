import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer-page',
  standalone: true,
  imports: [],
  templateUrl: './buyer-page.component.html',
  styleUrl: './buyer-page.component.css',
})
export class BuyerPageComponent {
  constructor(private router: Router) {}

  navigatetoPrdetails() {
    this.router.navigate(['/pr-details']);
  }
}
