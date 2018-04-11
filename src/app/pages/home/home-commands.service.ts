import { Injectable } from '@angular/core';
import { Commands } from '../../components/commands/commands';
import { Router } from '@angular/router';

@Injectable()
export class HomeCommandsService {

  private tabValue: string;
  private tabTimeout;
  private tabTimeoutDelay = 1000;
  private options: string[] = [
    'contact',
    'skills'
  ];

  constructor(
    private router: Router
  ) { }

  public onKeyDown(event:KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    switch( event.key ){
      case 'Enter':
        event.preventDefault();
        this.onKeyEnter( input.value );
        break;
      case 'Tab':
        event.preventDefault();
        input.value = this.onKeyTab( input.value ) || input.value;
        break;
      default:
        this.tabValue = undefined;
        break;
    }
  }

  public onKeyEnter(value) {
    this.router.navigate([value]);
  }

  public onKeyTab(value) {
    clearTimeout(this.tabTimeout);
    if ( !this.tabValue ) {
      this.tabValue = value;
    }
    const valueFounded = this.options.find( option => !!option.match( new RegExp(`^${this.tabValue}`, 'gi') ) );
    this.tabTimeout = setTimeout(()=>this.tabValue = undefined, this.tabTimeoutDelay);
    return valueFounded;
  }

}
