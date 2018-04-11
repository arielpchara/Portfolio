import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRouting } from './contact.routing';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ContactRouting,
    ComponentsModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
