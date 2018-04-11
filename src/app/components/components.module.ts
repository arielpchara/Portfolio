import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalComponent } from './terminal/terminal.component';
import { CommandsComponent } from './commands/commands.component';
import { RatingSkillsComponent } from './rating-skills/rating-skills.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TerminalComponent,
    CommandsComponent,
    RatingSkillsComponent
  ],
  exports: [
    TerminalComponent,
    RatingSkillsComponent
  ]
})
export class ComponentsModule { }
