import  initialState  from "../initialstate";
import { 
    EXAMPLE
} from '../constants';

// IF STATE NEED TO BE SAVED TO LOCAL STORAGE
// import { loadState } from "../localstorage";
// import { withReduxStateSync } from "redux-state-sync";
// Replace main reducer param to state = loadState(), action


const mainReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case EXAMPLE: {
            return { ...state, example :  action.payload }
        }
        default :
            return state;
    }
}


export default mainReducer;