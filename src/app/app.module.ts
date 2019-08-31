import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { BmiComponent } from './bmi/bmi.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { PortfolioCreateComponent } from './portfolio-create/portfolio-create.component';
import { Portfolio } from './_models/Portfolio';
import { PortfoliosService } from './_services/portfolios.service';
import { MessageLogComponent } from './message-log/message-log.component';
import { UtilsModule } from './_modules/utils/utils.module';

const appRoute: Routes = [
  {
    path: 'portfolios',
    component: PortfolioListComponent
  },
  {
    path: 'portfolios/create',
    component: PortfolioCreateComponent
  },
  { path: 'bmi', component: BmiComponent },
  {
    path: '', redirectTo: 'portfolios',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    BmiComponent,
    PortfolioComponent,

    PortfolioListComponent,
    PortfolioCreateComponent,
    MessageLogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    UtilsModule
  ],
  providers: [
    PortfoliosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {






}
