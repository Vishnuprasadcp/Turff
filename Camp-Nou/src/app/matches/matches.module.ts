import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchComponent } from './match/match.component';
import { AppModule } from '../app.module';




@NgModule({
  declarations: [
    MatchComponent
  ],
  imports: [
    CommonModule,
    AppModule
  ],
  exports: [
    MatchComponent
  ]

})
export class MatchesModule { }
