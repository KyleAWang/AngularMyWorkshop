/**
 * Created by Kyle on 8/14/2016.
 */
import {Routes, RouterModule} from '@angular/router';
import {CrisisListComponent}  from './crisis-list.component';
import {HeroListComponent}    from './hero-list.component';
import {ActivitiesComponent} from './core/client/components/activities.component'
const appRoutes:Routes = [
    {path: 'crisis-center', component: CrisisListComponent},
    {path: 'heroes', component: HeroListComponent},
    {path: 'activities', component: ActivitiesComponent},
    {path: '', component: ActivitiesComponent},
];
export const appRoutingProviders:any[] = [];
export const routing = RouterModule.forRoot(appRoutes);

