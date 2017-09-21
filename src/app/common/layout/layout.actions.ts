import {Action} from '@ngrx/store';

//Action types

export const LayoutActionTypes = {

    //modal action types
    OPEN_MODAL: '[layout] Open modal',
    CLOSE_MODAL: '[layout] close modal'
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

export type LayoutActions = OpenModalAction | CloseModalAction;
