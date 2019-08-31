import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathUtilService } from './math-util.service';



@NgModule({
  declarations: [
    MathUtilService
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MathUtilService
  ]
})
export class UtilsModule { }
