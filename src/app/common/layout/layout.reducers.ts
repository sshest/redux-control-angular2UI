import * as layout from './layout.actions';

export interface State {
    /* The description of the different parts of the layout go here */
    openedModalName: string,
}

//initial layout state definition
const initialState: State = {
    openedModalName: null
};

//reducer of the layout state
export function reducer(state = initialState, action: layout.LayoutActions): State {
    switch (action.type) {
        //reducers for modal state
        case layout.LayoutActionTypes.OPEN_MODAL:
            const name = action.payload;
            return Object.assign({}, state, {
                openedModalName: name
            });
        case layout.LayoutActionTypes.CLOSE_MODAL:

            return Object.assign({}, state, {
                openedModalName: null
            });
        default: return state;
    }
}

//opened modal name selector
export const getOpenedModalName = (state:State) => state.openedModalName;
