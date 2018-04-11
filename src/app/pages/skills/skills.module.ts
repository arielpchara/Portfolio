import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { ComponentsModule } from '../../components/components.module';
import { SkillsRouting } from './skills.routing';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    SkillsRouting
  ],
  declarations: [SkillsComponent]
})
export class SkillsModule { }
