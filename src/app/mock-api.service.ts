import { Injectable } from '@angular/core';
import * as data from '../../response.json';
import { MockAPIResponse } from './response.interface';

@Injectable({
  providedIn: 'root',
})
export class MockApiService {
  constructor() {}

  getData(): MockAPIResponse {
    return data;
  }
}
