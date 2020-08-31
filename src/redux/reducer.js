import {combineReducers} from 'redux'

const defaultState = {
    users: [],
    articles: [],
    logs: [],
    journals: [],
    favorites: [],
    moods: []

}

function userReducer(state = defaultState.users, action){
    switch (action.type) {
        case "get users":
        default:
            return state
    } 
}


function articleReducer(state = defaultState.articles, action){
    switch (action.type) {
        case "fetched articles":
            return action.payload
        default:
            return state
    }
}

function logReducer(state = defaultState.logs, action){
    switch (action.type) {
        case "fetched logs":
            return action.payload
        case "remove mood":
            return action.payload
        case "add mood log":
            return action.payload
        default:
            return state
    }
}

function journalReducer(state = defaultState.journals, action){
    switch (action.type) {
        case "fetched journals":
            return action.payload
        case "remove journal":
            return action.payload    
        default:
            return state
    }
}

function favoritesReducer(state = defaultState.favorites, action){
    switch (action.type) {
        case "favorite articles":
            return action.payload
        case "fetched favorites":
            return action.payload
        default:
            return state
    }
}


const rootReducer = combineReducers({
    user: userReducer,
    articles: articleReducer,
    logs: logReducer,
    journals: journalReducer,
    favorites: favoritesReducer
})


export default rootReducer