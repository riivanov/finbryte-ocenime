import { Routes } from '@angular/router';
import { AppraisalResultComponent } from './appraisal-result/appraisal-result.component';
import { AppraisalComponent } from './appraisal/appraisal.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  {
    path: ``,
    component: LandingPageComponent,
  },
  {
    path: `appraise`,
    component: AppraisalComponent,
  },
  {
    path: `result`,
    component: AppraisalResultComponent,
  },
];
