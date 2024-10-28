import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateIRNComponent } from './create-irn/create-irn.component';
import { HeaderComponent } from './header/header.component';
import { StepperComponent } from './stepper/stepper/stepper.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent,
    CreateIRNComponent,
    HeaderComponent,
    NgIf,
    NgFor,
    StepperComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Gprism';
  showHeader: boolean = true;
  userEmail: string | null = null;

  constructor(private router: Router) {
    // Listen to route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check the current route's data for 'hideHeader'
        const currentRoute = this.router.routerState.root.firstChild;
        if (currentRoute?.snapshot?.data?.['hideHeader']) {
          this.showHeader = false;
        } else {
          this.showHeader = true;
        }
      }
    });
    this.userEmail=sessionStorage.getItem('email')
  }
}
