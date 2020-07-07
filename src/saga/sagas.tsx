import {takeLatest, put, call,all} from 'redux-saga/effects'
import {fetchSearchData,fetchTopMovies,fetchTopTV,passdata,passTVdata} from './api_call'

function* clear () {
  yield put({type: `CLEAR_ALL`});
}

function* getSearchList() {
  const response = yield call(fetchSearchData);
  const data = passdata(response); 
  yield put({ type: `SEARCH_POST`, newposts: data});
}

function* getMovies () {
  const response = yield call (fetchTopMovies);
  const data = passdata(response); 
  yield put({ type: `TOP_MOVIES`, newposts: data});
}

function* getTV () {
  const response = yield call (fetchTopTV);
  const data = passTVdata(response); 
  yield put({ type: `TOP_TV`, newposts: data});
}

export default function* root() {
    // yield takeLatest(`SEARCH_POST_ASYNC`, getSearchList);
    yield all ([
      takeLatest(`CLEAR`, clear),
      takeLatest(`SEARCH_POST_ASYNC`, getSearchList),
      takeLatest(`TOP_MOVIES_ASYNC` , getMovies),
      takeLatest(`TOP_TV_ASYNC` , getTV)
    ])
  }

  