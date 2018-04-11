import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRouting } from './home.routing';
import { ComponentsModule } from '../../components/components.module';
import { HomeComponent } from './home.component';
import { HomeCommandsService } from './home-commands.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRouting,
    ComponentsModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    HomeCommandsService
  ]
})
export class HomeModule { }
