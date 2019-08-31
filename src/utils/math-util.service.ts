import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathUtilService {

  constructor() { }

  public add(x: number, y: number) {
    return x + y;
  }
}
