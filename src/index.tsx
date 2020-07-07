import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import rootReducer from './redux/reducer';
import createSagaMiddlesware from 'redux-saga'
import rootSaga from './saga/sagas';


const sagaMiddleware = createSagaMiddlesware();
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root')
);

