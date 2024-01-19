import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appraisal-input-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './appraisal-input-form.component.html',
  styleUrl: './appraisal-input-form.component.scss',
})
export class AppraisalInputFormComponent {
  form!: FormGroup;

  propertyTypes = ['apartment', 'home'];
  constructionTypes = ['Тухла', 'ЕПК', 'Панел', 'Друг'];
  furnishings = ['Обзаведен', 'Необзаведен', 'Луксозно обзавеждане'];
  conditions = [
    'Саниран',
    'След ремонт',
    'Нужда от ремонт',
    'Незавършен',
    'На зелено',
  ];

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.form = this.fb.group({
      address: ['', Validators.required],
      area: [''],
      propertyType: [''],
      constructionType: [''],
      constructionYear: [''],
      floor: [''],
      numFloors: [''],
      furnishing: [''],
      condition: [''],
      north: [''],
      east: [''],
      south: [''],
      west: [''],
    });
  }

  save(form: FormGroup) {
    // Would connect if 3rd page was done
    // if (form.valid) {
    //   this.router.navigate(['result']);
    // }
  }
}
