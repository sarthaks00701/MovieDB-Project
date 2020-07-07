export function clear () {
    return {
        type: `CLEAR`
    }
}

export function searchPost() {
        return {
        type: `SEARCH_POST_ASYNC`
    }
}

export function giveTopMovies() {
    return  {
        type : `TOP_MOVIES_ASYNC`
    }
}

export function giveTopTV() {
    return  {
        type : `TOP_TV_ASYNC`
    }
}