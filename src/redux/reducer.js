import {combineReducers} from 'redux'

const defaultState = {
    users: [],
    articles: [],
    logs: [],
    journals: [],
    favorites: [],
    moods: [],
    loggedInUser: null

}

function usersReducer(state = defaultState.users, action){
    switch (action.type) {
        case "get users":
            return action.payload
        default:
            return state
    } 
}
function loggedUserReducer(state = defaultState.loggedInUser, action){
    switch (action.type) {
        case "logged in user":
            return action.payload
        case "log out":
            return action.payload
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
        case "update log":
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
    users: usersReducer,
    loggedInUser: loggedUserReducer,
    articles: articleReducer,
    logs: logReducer,
    journals: journalReducer,
    favorites: favoritesReducer
})


export default rootReducer