import { Component, Input } from '@angular/core';
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
  public openedModalName: any;
  public alerts$: Observable<any>;

  @Input() modalState:string;

  constructor(
      private store: Store<fromRoot.AppState>
  ) {
    store.select(fromRoot.getLayoutOpenedModalName).subscribe((state)=>{
      this.openedModalName = state;
    });
    this.alerts$ = store.select(fromRoot.getLayoutAlerts);
  }
  title = 'app';

  handleOpenModal(modalName:string) {
    this.store.dispatch(new layout.OpenModalAction(modalName));
  }

  handleCloseModal() {
    this.store.dispatch(new layout.CloseModalAction());
  }

  addAlert(alert) {
    this.store.dispatch(new layout.AddAlertAction(alert));
  }

  onCloseAlert(alert:Object){
    this.store.dispatch(new layout.RemoveAlertAction(alert));
  }
}
