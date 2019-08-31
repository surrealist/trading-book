import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../_models/Portfolio';
import { PortfoliosService } from '../_services/portfolios.service';
import { MessageLogService } from '../_services/message-log.service';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css'],
  providers: [ PortfoliosService ]
})
export class PortfolioListComponent implements OnInit {

  public items: Portfolio[] = [];

  constructor(
    private ps: PortfoliosService,
    public log: MessageLogService) { }

  ngOnInit() {
    this.items = this.ps.get();
    this.log.add('Initial PortfolioList');
  }

}
