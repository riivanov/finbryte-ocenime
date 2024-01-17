import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AppraisalInputFormComponent } from '../appraisal-input-form/appraisal-input-form.component';

@Component({
  selector: 'app-appraisal',
  standalone: true,
  imports: [MatIconModule, AppraisalInputFormComponent],
  templateUrl: './appraisal.component.html',
  styleUrl: './appraisal.component.scss',
})
export class AppraisalComponent {}
