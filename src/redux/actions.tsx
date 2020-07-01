import {POST} from '../proptypes'

export function searchPost(newposts: POST[]) {
    return {
        type: `SEARCH_POST`,
        newposts: newposts
    }
}

export function giveTopMovies (newposts: POST[]) {
    return {
        type: `GIVE_TOP_MOVIES`,
        newposts: newposts
    }
}

export function giveTopTV (newposts: POST[]) {
    return {
        type: `GIVE_TOP_TV`,
        newposts: newposts
    }
}

export function  applyGenre(newposts:POST[],post_type:string,genre:string) {
    return {
        type: `APPLY_GENRE`,
        newposts: newposts,
        genre: genre,
        post_type: post_type
    }
}

export function applyLanguage(newposts:POST[],post_type:string,language:string) {
    return {
        type: `APPLY_LANGUAGE`,
        newposts: newposts,
        language: language,
        post_type: post_type
    }
}