/**
 * Created by Kyle on 8/14/2016.
 */
import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
// import {AppComponent}       from './app.component';
import {AppComponent1} from './core/client/components/app.component1';
import {
    routing,
    appRoutingProviders
} from './app.routing';
import {HeroListComponent}    from './hero-list.component';
import {CrisisListComponent}  from './crisis-list.component';
import {ActivitiesComponent} from './core/client/components/activities.component';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent1,
        HeroListComponent,
        CrisisListComponent,
        ActivitiesComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent1]
})
export class AppModule {
}

