import {Action} from '@ngrx/store';

//Action types

export const LayoutActionTypes = {

    //modal action types
    OPEN_MODAL: '[layout] Open modal',
    CLOSE_MODAL: '[layout] close modal',
    //Left sidenav action types
    OPEN_LEFT_SIDENAV: '[Layout] Open LeftSidenav',
    CLOSE_LEFT_SIDENAV: '[Layout] Close LeftSidenav',
    //Right sidenav actions
    OPEN_RIGHT_SIDENAV: '[Layout] Open RightSidenav',
    CLOSE_RIGHT_SIDENAV: '[Layout] Close RightSidenav',

};

export class OpenModalAction {
    type = LayoutActionTypes.OPEN_MODAL;
    constructor(public payload:string) {

    }
}

export class CloseModalAction {
    type = LayoutActionTypes.CLOSE_MODAL;
    constructor(public payload?:string) {}
}

export class OpenLeftSidenavAction implements Action {
    type = LayoutActionTypes.OPEN_LEFT_SIDENAV;
    constructor(public payload?:string) { }
}

export class CloseLeftSidenavAction implements Action {
    type = LayoutActionTypes.CLOSE_LEFT_SIDENAV;
    constructor(public payload?:string) { }
}

export class OpenRightSidenavAction implements Action {
    type = LayoutActionTypes.OPEN_RIGHT_SIDENAV;
    constructor(public payload?:string) { }
}

export class CloseRightSidenavAction implements Action {
    type = LayoutActionTypes.CLOSE_RIGHT_SIDENAV;
    constructor(public payload?:string) { }
}

export type LayoutActions = CloseLeftSidenavAction | OpenLeftSidenavAction | CloseRightSidenavAction | OpenRightSidenavAction | OpenModalAction | CloseModalAction;