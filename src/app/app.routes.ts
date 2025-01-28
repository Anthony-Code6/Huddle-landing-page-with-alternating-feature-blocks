import { Routes } from '@angular/router';
import { LayoutsComponent } from './shared/layouts/layouts.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
    {
        path: '', component: LayoutsComponent, children: [
            { path: 'home' ,component:HomeComponent}
        ]
    }
];
