import {combineReducers} from 'redux'

const defaultState = {
    user: {}
}

function userReducer(state = defaultState.user, action){
    return {}
}

const rootReducer = combineReducers({
    user: userReducer
})

export default rootReducer