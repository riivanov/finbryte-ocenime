import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AppraisalInputFormComponent } from '../appraisal-input-form/appraisal-input-form.component';
import { MockApiService } from '../mock-api.service';

@Component({
  selector: 'app-appraisal',
  standalone: true,
  imports: [
    RouterModule,
    MatIconModule,
    AppraisalInputFormComponent,
    MatCheckboxModule,
    MatButtonModule,
  ],
  templateUrl: './appraisal.component.html',
  styleUrl: './appraisal.component.scss',
})
export class AppraisalComponent {
  active = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: MockApiService
  ) {
    console.log(this.api.getData().suggestions);
  }

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

    this.active = this.activatedRoute.snapshot.url.at(0)?.path === 'appraise';
  }
}
