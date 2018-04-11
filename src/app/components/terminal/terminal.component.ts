import { Component, OnInit, Input } from '@angular/core';
import { Commands } from '../commands/commands';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {

  @Input() public title: string;
  @Input() public commands: Commands;

  constructor() {
  }

  ngOnInit() {
  }

}
