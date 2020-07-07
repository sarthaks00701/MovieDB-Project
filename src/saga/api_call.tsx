import Posts from '../data/Posts'
import {POST,movie} from '../proptypes'

const url_init:string = `https://api.themoviedb.org/3`;
const api_key :string = `b12b3be8f9bb02b35f468c103469ff68`;


export async function fetchSearchData (){
    try {
        let url:string = `${url_init}/search/movie?api_key=${api_key}&query=${Posts[0]}&language=${Posts[4]}`
        if (Posts[3] !== '') {
            url += `&with_genres=${Posts[3]}`
        }
        if (Posts[5] === true ) {
            url += `&page=${Posts[6]}`;
            Posts[5] = false;
        }
        const response =await fetch(url);
        let data = await response.json();
        let data_array = data.results;
        return data_array;
    }catch (e) {
        console.log(e);
    }
}

export async function fetchTopMovies () {
    try {
        let url:string = `${url_init}/movie/popular?api_key=${api_key}&language=${Posts[4]}`
        if (Posts[3] !== '') {
            url += `&with_genres=${Posts[3]}`
        }
        if (Posts[5] === true ) {
            url += `&page=${Posts[6]}`;
            Posts[5] = false;
        }
        const response =await fetch(url);
        let data = await response.json();
        let data_array = data.results;
        console.log(data_array);
        return data_array;
    }catch (e) {
        console.log(e);
    }
}

export async function fetchTopTV () {
    try {
        let url = `${url_init}/tv/popular?api_key=${api_key}&language=${Posts[4]}`;
        if (Posts[3] !== '') {
            url += `&with_genres=${Posts[3]}`
        }
        if (Posts[5] === true ) {
            url += `&page=${Posts[6]}`;
            Posts[5] = false;
        }
        const response =await fetch(url);
        let data = await response.json();
        let data_array = data.results;
        return data_array;
    }catch (e) {
        console.log(e);
    }
}

export const passdata = (data:any) => {
    const posts: POST[] = [];
    if (Posts[7] === true){
        data.sort(function(x:movie, y:movie){return y.popularity - x.popularity;})
        Posts[7] = false;
    }

    data.map((movie:movie) => {
        let post:POST = {id:movie.id,imageUrl:`https://image.tmdb.org/t/p/w500${movie.poster_path}`,description:movie.title}; 
        posts.push(post);
        return 0;    
    })
    
    if (Posts[6]>1) Posts[1] = Posts[1].concat(posts)
    else {
    Posts[1] = posts;
    }
    return Posts[1];
}

export const passTVdata = (data:any) => {
    const posts: POST[] = [];
    if (Posts[7] === true){
        data.sort(function(x:movie, y:movie){return y.popularity - x.popularity;})
        Posts[7] = false;
    }
    data.map((movie:movie) => {
        let post:POST = {id:movie.id,imageUrl:`https://image.tmdb.org/t/p/w500${movie.poster_path}`,description:movie.original_name}; 
        posts.push(post);
        return 0;    
    })
    if (Posts[6]>1){ 
    Posts[1] = Posts[1].concat(posts)
    }
    else {
    Posts[1] = posts;
    }
    return Posts[1];
}





// if (Posts[5] === true) {
//     url = `${url_init}/movie/popular?api_key=${api_key}&language=${Posts[4]}&page=${Posts[6]}`;
//     if (Posts[3] !== '') {
//         url += `&with_genres=${Posts[3]}`
//     }
//     const response_1 =await fetch(url);
//     const data_1 = await response_1.json();
//     let data_array_1 = data_1.results;
//     data_array =data_array.concat(data_array_1);
//     // console.log(data_array)
//     Posts[5] = false;
// }