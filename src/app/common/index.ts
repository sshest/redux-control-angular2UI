//get createSelector to receive derived parts of state
import {createSelector} from 'reselect';

import {storeLogger} from "ngrx-store-logger";

//get reducers
import * as fromLayout from "./layout/layout.reducers";

//import compose to wrap all store actions with logger
import {compose} from "@ngrx/core";
import {combineReducers} from "@ngrx/store";

export interface AppState {
    layout: fromLayout.State
}

export const reducers = {
    layout: fromLayout.reducer
}

/*
development reducer version, wrapped with storeLogger
it logs all state changes to console
 */
const forDevelopmentReducer: Function = compose(storeLogger(), combineReducers)(reducers);

/*
"meta" reducer version that transfer current state and dispatched action
to all the reducers wrapped with logger
 */
export function metaReducer(state: AppState, action: any) {
    return forDevelopmentReducer(state, action);
}

/*
    Selectors:
*/

//selector of layout state
// export const getLayoutState = (state: any) =>{
//     console.log(state);
//     return state.reducer.layout;
// }

/*
    Selector of openedModalName from layout's state

    createSelector passes a layout state to getOpenedModalName reducer
*/

// export const getLayoutOpenedModalName = createSelector(getLayoutState, fromLayout.getOpenedModalName);

