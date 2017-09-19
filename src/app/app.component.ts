import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

//immport root state for selecting it's parts
import * as fromRoot from './common/index';

//import layout actions to be able dispatch'em in the component
import * as layout from './common/layout/layout.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
      private store: Store<fromRoot.AppState>
  ) {

  }
  title = 'app';
}
