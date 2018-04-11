import { Component, OnInit } from '@angular/core';
import { HomeCommandsService } from './home-commands.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:  ['./home-component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    public homeCommandsService: HomeCommandsService
  ) {

  }

  ngOnInit() {
  }

}
