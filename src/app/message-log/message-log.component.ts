import { Component, OnInit } from '@angular/core';
import { MessageLogService } from '../_services/message-log.service';

@Component({
  selector: 'app-message-log',
  templateUrl: './message-log.component.html',
  styleUrls: ['./message-log.component.css']
})
export class MessageLogComponent implements OnInit {

  constructor(public log: MessageLogService) { }

  ngOnInit() {
  }

}
