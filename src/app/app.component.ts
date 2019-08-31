import { Component } from '@angular/core';
import { MessageLogService } from './_services/message-log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'TradingBook';

  constructor() {
    //
  }
}
