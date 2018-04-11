import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss']
})
export class CommandsComponent implements OnInit {

  @Output() keyup = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
