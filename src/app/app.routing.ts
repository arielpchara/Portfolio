import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
    {path: 'skills', loadChildren: () => import('./pages/skills/skills.module').then(m => m.SkillsModule)},
    {path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)}
];


export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
