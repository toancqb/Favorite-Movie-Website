import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CardComponent } from '../lib/card/card.component';
import { MainPage } from './main.page';

@NgModule({
  declarations: [
    MainPage,
    CardComponent    
  ],
  exports: [
    MainPage
  ],
  imports: [
    CommonModule
  ],
  providers: [],
})
export class MainPageModule { }