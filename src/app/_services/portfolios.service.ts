import { Injectable } from '@angular/core';
import { Portfolio } from '../_models/Portfolio';

@Injectable({
  providedIn: 'root'
})
export class PortfoliosService {

  constructor() { }

  public get(): Portfolio[] {
    return [
      new Portfolio('My Portfolio', true, 1_000_000),
      new Portfolio('My Papertrade', true, 1_000_000),
    ];
  }

}
