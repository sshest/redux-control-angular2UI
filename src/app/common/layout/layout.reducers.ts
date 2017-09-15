import * as layout from './layout.actions';

export interface State {
    /* The description of the different parts of the layout go here */

}

//initial layout state definition
const initialState: State = {

};

//reducer of the layout state
export function reducer(state = initialState, action: layout.LayoutActions): State {
    switch (action.type) {
        default: return state;
    }
}
