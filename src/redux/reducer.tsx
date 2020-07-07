import Posts from '../data/Posts'
import {POST,ACTION} from '../proptypes'

const rootReducer = function post (state:[string,POST[],string,string,string,boolean,number,boolean]=Posts,action:ACTION) {
    switch(action.type){
        case `CLEAR_ALL` : 
            state = [state[0],[],state[2],state[3],state[4],state[5],state[6],state[7]];
            return state;
        case `SEARCH_POST` : {
            state = [state[0],action.newposts,'search',state[3],state[4],state[5],state[6],state[7]];
            return state;
        }
        case `TOP_MOVIES` : {
            state = [state[0],action.newposts,'Top_Movies',state[3],state[4],state[5],state[6],state[7]];
            return state;
        }
        case `TOP_TV` : {
            state = [state[0],action.newposts,'Top_TV',state[3],state[4],state[5],state[6],state[7]];
            return state;
        }   
        case `FETCH_MORE`: {
            state = [state[0],action.newposts,'Top_TV',state[3],state[4],state[5],state[6],state[7]];
            return state; 
        }
        default: return state;
    }
}

export default rootReducer