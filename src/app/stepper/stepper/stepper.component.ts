import { Component } from '@angular/core';
import { Step1Component } from '../step1/step1.component';
import { Step2Component } from '../step2/step2.component';
import { Step3Component } from '../step3/step3.component';
import { Step4Component } from '../step4/step4.component';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [Step1Component, Step2Component, Step3Component, Step4Component, NgIf, NgClass],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  currentStep: number = 1;
  isNFA: boolean = false;
  isNfaAvailable: boolean | null = null; // Add this property
  totalSteps: number = 4;


  nextStep() {
    if (this.isNFA) {
      if (this.currentStep === 1) {
        this.currentStep = 2;
      } else if (this.currentStep === 2) {
        this.currentStep = 3;
      }
    } else {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.isNFA) {
      if (this.currentStep === 2) {
        this.currentStep = 1;
      } else if (this.currentStep === 3) {
        this.currentStep = 2;
      }
    } else {
      this.currentStep--;
    }
  }

  updateIsNFA(isNFA: boolean) {
    this.isNFA = isNFA;
    this.totalSteps = isNFA ? 3 : 4;
  }

  // Add this method to handle NFA availability updates
  updateNfaAvailability(isAvailable: boolean) {
    this.isNfaAvailable = isAvailable;
    
  }
  
}