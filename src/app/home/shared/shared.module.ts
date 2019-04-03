import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedTranslateModule } from './shared-translate.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedTranslateModule
  ],
  exports: [SharedTranslateModule]
})
export class SharedModule { }
