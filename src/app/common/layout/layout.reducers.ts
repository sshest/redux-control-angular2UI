import * as layout from './layout.actions';

export interface State {
    /* The description of the different parts of the layout go here */
    //layout: any
    // openedModalName: string,
    leftSidebarOpened:boolean;
    rightSidebarOpened:boolean;
}

//initial layout state definition
const initialState: State = {
    //layout: null
    // openedModalName: null,
    leftSidebarOpened:true,
    rightSidebarOpened:false,

};

//reducer of the layout state
export function reducer(state = initialState, action: layout.LayoutActions): State {
    switch (action.type) {
        //reducers for modal state
        // case layout.LayoutActionTypes.OPEN_MODAL:
        //     const name = action.payload;
        //     return Object.assign({}, state, {
        //         openedModalName: name
        //     });
        // case layout.LayoutActionTypes.CLOSE_MODAL:
        //
        //     return Object.assign({}, state, {
        //         openedModalName: null
        //     });
        case layout.LayoutActionTypes.CLOSE_LEFT_SIDENAV:
            {
                return Object.assign({}, state, { leftSidebarOpened: false });
            }
        case layout.LayoutActionTypes.OPEN_LEFT_SIDENAV:
            {
                return Object.assign({}, state, { leftSidebarOpened: true });
            }
        case layout.LayoutActionTypes.CLOSE_RIGHT_SIDENAV:
            {
                return Object.assign({}, state, { rightSidebarOpened: false });
            }
        case layout.LayoutActionTypes.OPEN_RIGHT_SIDENAV:
            {
                return Object.assign({}, state, { rightSidebarOpened: true });
            }
        default:
            //console.log(state);
            return state;
    }
}

//opened modal name selector
// export const getOpenedModalName = (state:State) => state.openedModalName;
export const getLeftSidenavState = (state:State) => state.leftSidebarOpened;
export const getRightSidenavState = (state:State) => state.rightSidebarOpened;
