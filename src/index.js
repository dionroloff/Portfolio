import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects'

// Create the rootSaga generator function
function* rootSaga() {
    //first saga triggered by ProjectCard.js component
    yield takeEvery('GET_PROJECTS', getProjects)
    yield takeEvery('ADD_PROJECT', addProject);
    yield takeEvery('DELETE_PROJECT', deleteProject);
}

function* getProjects(action) {
    //axios get request from the router and 
    //then triggers the set projects reducer
    try {
        const serverResponse = yield axios.get('/api/projects');
        const nextAction = {type: 'SET_PROJECTS', 
                            payload: serverResponse.data}
        yield put(nextAction);
        
    } catch(error) {
        console.log(`ERROR in getProjects saga: ${error}`);
    }
}

function* addProject(action) {
    //This saga stores an axios request in the projects router
    //and then gets the projects again.
    console.log('in add project saga');
    try {
        yield axios.post('api/projects', action.payload);
        const nextAction = {type: 'GET_PROJECTS'}
        yield put(nextAction);
    } catch(error) {
        console.log(`ERROR in adding project: ${error}`);
    }
}

function* deleteProject(action) {
    console.log('in deleteProject', action.payload);
    try {
        yield axios.delete(`api/projects/${action.payload.id}`, action.payload)
        const nextAction = {type: 'GET_PROJECTS'};
        yield put(nextAction);
    } catch(error) {
        console.log(`Error in deleting project: ${error}`);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
