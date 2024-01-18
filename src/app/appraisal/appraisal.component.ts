import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { AppraisalInputFormComponent } from '../appraisal-input-form/appraisal-input-form.component';

@Component({
  selector: 'app-appraisal',
  standalone: true,
  imports: [
    MatIconModule,
    AppraisalInputFormComponent,
    MatCheckboxModule,
    MatButtonModule,
  ],
  templateUrl: './appraisal.component.html',
  styleUrl: './appraisal.component.scss',
})
export class AppraisalComponent {
  ngOnInit() {
    // @ts-ignore
    let map: google.maps.Map;
    async function initMap(): Promise<void> {
      // @ts-ignore
      const { Map } = (await google.maps.importLibrary(
        'maps'
        // @ts-ignore
      )) as google.maps.MapsLibrary;

      map = new Map(document.getElementById('map') as HTMLElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    }

    initMap();
  }
}
