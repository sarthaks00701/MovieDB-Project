export interface POST {
    id: number,
    imageUrl: string,
    description: string   
}

export interface ACTION {
    type: string,
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
    vote_average: number
}

export interface custom {
    posts: [string,POST[],string,string,string],
    searchPost: (newposts: POST[]) => {
      type: string,
      newposts: POST[],
    }
    giveTopMovies: (newposts: POST[]) => {
      type: string,
      newposts: POST[]
    }
    giveTopTV: (newposts: POST[]) => {
        type: string,
        newposts: POST[]
    }
    applyGenre: (newposts: POST[],genre: string,post_type:string) => {
      type: string,
      newposts: POST[],
      genre:string
    }
    applyLanguage: (newposts: POST[],language: string,post_type:string) => {
      type: string,
      newposts: POST[],
      language:string
    }

  }