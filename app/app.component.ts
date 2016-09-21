/**
 * Created by Kyle on 8/14/2016.
 */
import {Component} from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <h1>Component Router</h1>
    <nav>
      <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/activities" routerLinkActive="active">Friends</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}

