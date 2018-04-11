import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalComponent } from './terminal/terminal.component';
import { CommandsComponent } from './commands/commands.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TerminalComponent,
    CommandsComponent
  ],
  exports: [
    TerminalComponent
  ]
})
export class ComponentsModule { }
