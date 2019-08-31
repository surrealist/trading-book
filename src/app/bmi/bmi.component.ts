import { Component, OnInit } from '@angular/core';
import { Person } from './bmi.models';
import { MessageLogService } from '../_services/message-log.service';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {

  public p: Person = new Person();

  constructor(private log: MessageLogService) { }

  ngOnInit() {
  }

  public writeLog() {
    const s = `${this.p.heightCm} cm `
      + `and ${this.p.weightKg} kg`;

    this.log.add(s);
  }

  public bmiCategoryClass(p: Person) {
    const isNormal = p.bmiCategory() === 'Normal';

    return {
      'text-light': !isNormal,
      'bg-danger': !isNormal,
      'text-success': isNormal
    };
  }

}
