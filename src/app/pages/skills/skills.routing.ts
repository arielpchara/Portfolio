import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsComponent } from './skills.component';


const routes: Routes = [
  {path: '', component: SkillsComponent}
];

export const SkillsRouting: ModuleWithProviders = RouterModule.forChild(routes);
