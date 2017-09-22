import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromRoot from "./common/index";
import * as layout from './common/layout/layout.actions';

@Directive({
  selector: '[appSidebarToggle]'
})
export class SidebarToggleDirective {
  public leftSidebarState: boolean;
  public rightSidebarState: boolean;

  @Input() appSidebarToggle: string;

  @HostListener('click', ['$event'])
  onClick(e) {
    /* Left sidenav toggle */
    if (this.appSidebarToggle == "left" && this.leftSidebarState) {
      this._store.dispatch(new layout.CloseLeftSidenavAction());
    } else if(this.appSidebarToggle == "left" && !this.leftSidebarState) {
      this._store.dispatch(new layout.OpenLeftSidenavAction())
    }
    /* Right sidenav toggle */
    if (this.appSidebarToggle == "right" && this.rightSidebarState) {
      this._store.dispatch(new layout.CloseRightSidenavAction());
    } else if(this.appSidebarToggle == "right" && !this.rightSidebarState) {
      this._store.dispatch(new layout.OpenRightSidenavAction());
    }
  }

  constructor(private  el:ElementRef, private  renderer: Renderer2, private _store: Store<fromRoot.AppState>) {
    this._store.select(fromRoot.getLayoutLeftSidenavState).subscribe((state)=>{
      this.leftSidebarState = state;
    });
    this._store.select(fromRoot.getLayoutLeftSidenavState).subscribe((state)=>{
      this.leftSidebarState = state;
    });
  }

}
