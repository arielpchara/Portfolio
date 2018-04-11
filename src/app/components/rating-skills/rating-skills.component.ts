import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'span.rating-skills',
  templateUrl: './rating-skills.component.html',
  styleUrls: ['./rating-skills.component.scss']
})
export class RatingSkillsComponent implements OnInit {

  private maxSkill = 10;
  public maxTab = new Array(35).fill(" ");
  public startTab:string[] = [];
  public endTab:string[] = [];
  public unratedSkill = new Array(this.maxSkill).fill(false);
  public ratedSkill:boolean[] = [];
  @Input() rate:number;
  @Input() title:string;
  @Input() tab:number;
  @Input() color:string;

  constructor() { }

  ngOnInit() {
    this.ratedSkill = this.unratedSkill.map( (value, key) => {
      return this.rate > key
    });
    const tab = this.maxTab.reduce( (reduced, value, key) => {
      const init = this.tab*2;
      if ( init > key ) {
        return {
          start: [...reduced.start, ' '],
          end: reduced.end
        }
      } else if ( key > init + this.title.length ) {
        return {
          start: reduced.start,
          end: [...reduced.end, ' ']
        }
      } else {
        return {
          start: reduced.start,
          end: reduced.end
        }
      }
    } , {start:[], end:[]});
    console.log(tab);
    this.startTab = tab.start;
    this.endTab = tab.end;
  }

}
