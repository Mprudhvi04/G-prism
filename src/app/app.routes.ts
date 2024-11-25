import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateIRNComponent } from './create-irn/create-irn.component';
import { StepperComponent } from './stepper/stepper/stepper.component';
import { Step1Component } from './stepper/step1/step1.component';
import { Step2Component } from './stepper/step2/step2.component';
import { Step3Component } from './stepper/step3/step3.component';
import { Step4Component } from './stepper/step4/step4.component';
import { BuyerPageComponent } from './buyer/buyer-page/buyer-page.component';
import { PrDetailsComponent } from './pr-details/pr-details/pr-details.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { hideHeader: true } },
  { path: 'create-irn', component: CreateIRNComponent }, // No need to hide the header here
  { path: 'stepper',component:StepperComponent},
  { path: 'step1',component:Step1Component},
  { path: 'step2',component:Step2Component},
  { path: 'step3',component:Step3Component},
  { path: 'step4',component:Step4Component},
  {path:'buyer-page', component:BuyerPageComponent},
  {path:'pr-details', component:PrDetailsComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Redirect to login by default
  
];
