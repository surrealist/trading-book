import { Injectable } from '@angular/core';
import { format } from 'date-fns';
import { MathUtilService } from 'src/utils/math-util.service';

@Injectable({
  providedIn: 'root'
})
export class MessageLogService {

  public items: string[] = [];

  constructor(private m: MathUtilService) { }

  public add(s: string) {
    const dt = format(new Date(), 'yyyy-MM-dd HH:mm:ss');

    this.items.unshift(`${dt}: ${s} [${this.m.add(10, 20)}]`);
  }

  public clear() {
    this.items = [];
  }
}
