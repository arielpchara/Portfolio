import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadChildren: './pages/home/home.module#HomeModule'},
    {path: 'skills', loadChildren: './pages/skills/skills.module#SkillsModule'},
    {path: 'contact', loadChildren: './pages/contact/contact.module#ContactModule'}
];


export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
