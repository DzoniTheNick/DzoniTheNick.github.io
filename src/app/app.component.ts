import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';

  constructor(private contexts: ChildrenOutletContexts) {}

  getAnimationSource():any {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['component'];
  }
}
