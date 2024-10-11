import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrandingComponent } from './branding/branding.component';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { TutorProfileComponent } from './tutor-profile/tutor-profile.component';
import { TutorListComponent } from './tutor-list/tutor-list.component';
import { StudentComponent } from './student/student.component';

export const routes: Routes = [
    {
        path: '',
        component:LandingPageComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
               
            },
            {
                path: '',
                redirectTo: 'landingpage',
                pathMatch: 'full',
                
                
            },
            {
                path:'landingpage',
                component: BrandingComponent,
               
            },
            {
                path:'tutor-profile',
                component: TutorProfileComponent,
               
            },
            {
                path: 'tutor-list',
                component: TutorListComponent,
               
            },
            {
                path: 'student',
                component: StudentComponent,
               
            },
           
          
          
        ]
    },
];
