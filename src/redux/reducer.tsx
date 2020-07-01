import Posts from '../data/Posts'
import {POST,ACTION} from '../proptypes'

const rootReducer = function post (state:[string,POST[],string,string,string]=Posts,action:ACTION) {
    switch(action.type){
        case `SEARCH_POST`: {
            state = [state[0],action.newposts,'search',state[3],state[4]];
            return state;
        }
        case `GIVE_TOP_MOVIES`: {
            state = [state[0],action.newposts,'Top_Movies',state[3],state[4]];
            return state;
        }
        
        case `GIVE_TOP_TV`: {
            state = [state[0],action.newposts,'Top_TV',state[3],state[4]];
            return state;
        }
        case `APPLY_GENRE`: {
            state = [state[0],action.newposts,action.post_type,action.genre,state[4]];
            return state
        }
        case `APPLY_LANGUAGE`: {
            state = [state[0],action.newposts,action.post_type,state[3],action.language];
            return state
        }
        
        default: return state;

    }
}

export default rootReducer