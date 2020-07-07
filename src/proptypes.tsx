export interface POST {
    id: number,
    imageUrl: string,
    description: string   
}

export interface ACTION {
    type: string,
    search_query: string,
    newposts: POST[],
    querytype: string,
    genre: string,
    language:string,
    post_type:string
}

export interface movie {
    poster_path: string,
    adult: boolean,
    overview: string,
    release_date: string,
    genre_ids: number[],
    id: number,
    original_title:string,
    original_language: string,
    title: string,
    backdrop_path: string,
    popularity: number,
    vote_count: number,
    video: boolean,
    vote_average: number,
    original_name: string
}

export interface custom {
    posts: [string,POST[],string,string,string,boolean,number,boolean]
    clear: () => {
      type:string
    }
    searchPost: () => {
      type: string
    }
    giveTopMovies: () => {
      type: string
    }
    giveTopTV: () => {
      type: string
    }
  }