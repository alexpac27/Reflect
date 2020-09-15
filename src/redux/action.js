import {moodLogConverter} from '../helpers/HelperMethods'

export const getArticles = (dispatch) => {
    return function(dispatch){
        fetch("http://localhost:3000/api/v1/articles")
        .then(resp =>resp.json())
        .then(data => {dispatch({type: "fetched articles", payload: data}) })
    }
}

export const getLogs = (dispatch) => {
    return function(dispatch){
        fetch("http://localhost:3000/api/v1/logs")
        .then(resp =>resp.json())
        .then(data => dispatch({type: "fetched logs", payload: data}))
    }
}

export const getJournals = (dispatch) => {
    return function(dispatch){
        fetch("http://localhost:3000/api/v1/journals")
        .then(resp =>resp.json())
        .then(data => dispatch({type: "fetched journals", payload: data})) //
    }
}

export const postJournal = (state, dispatch) => {
    return function(dispatch){
        fetch("http://localhost:3000/api/v1/journals",{
            method: "POST",
            headers: {
                "content-type":"application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                journal: {
                    user_id: 1,
                    prompt: state.prompt,
                    resp1: state.input1,
                    resp2: state.input2,
                    resp3:state.input3
                }
            })
        })
        .then(resp =>resp.json())
        .then(data => dispatch({type: "fetched journals", payload: data}))
    }
}

export const renderFav = (idObj, state, userId) => {
    if (state){
        return function(dispatch){
            fetch("http://localhost:3000/api/v1/favorites",{
                method: "POST",
                headers: {
                    "content-type":"application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    favorite:
                        {user_id: userId,
                        article_id: idObj
                    }
                })
            })
            .then(resp =>resp.json())
            .then(data => dispatch({type: "logged in user", payload: data}) ) 
        }
    } else {
        return function(dispatch){
            fetch(`http://localhost:3000/api/v1/favorites/${idObj}`,{
                method: "DELETE"
            })
            .then(resp =>resp.json())
            .then(data => {
                fetch(`http://localhost:3000/api/v1/users/${userId}`)
                .then(resp => resp.json())
                .then(data => dispatch({type: "logged in user", payload: data}))
            }) 
        }
    }  
}

export const fetchFavs = (dispatch) => {
    return function(dispatch){
        fetch("http://localhost:3000/api/v1/favorites")
        .then(resp =>resp.json())
        .then(data => dispatch({type: "fetched favorites", payload: data}))
    }
}

export const userInfo = (user) => {
    return function(dispatch){ dispatch({type: "logged in user", payload: user}) }
}


export const loggedInUser = (obj) => {
    return function(dispatch){
        fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                "content-type":"application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({user: obj})
        })
        .then(resp =>resp.json())
        .then(data => {
            localStorage.setItem("token", data.jwt)
            dispatch({type: "logged in user", payload: data})
    })
    }
}

export const createUser = (state) => {
    return function(dispatch){
        fetch("http://localhost:3000/api/v1/users",{
            method: "POST",
            headers: {
                "content-type":"application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                user:{
                    first_name: state.firstName,
                    last_name: state.lastName,
                    email: state.email,
                    password: state.password
                }
            })
        })
        .then(resp =>resp.json())
        .then(data => {
            if (data.error === "failed to create user"){
                dispatch({type: "register error", payload: "This email address is already registered. Please select another email."})
            } else {
                dispatch({type: "logged in user", payload: data})
                dispatch({type: "remove error", payload: null})
            }
        }) 
       
    }
}

export const logOut = (obj) => {
    return function(dispatch){ dispatch({type: "log out", payload: null}) } 
}

export const changeEntry = (idObj) => {
    return function(dispatch){
        fetch(`http://localhost:3000/api/v1/journals/${idObj}`,{
            method: "DELETE"
        })
        .then(resp =>resp.json())
        .then(data => dispatch({type: "remove journal", payload: data})) 
    }
}


export const changeMood = (idObj, state, user) => {
    if (state.delete){
        return function(dispatch){
            fetch(`http://localhost:3000/api/v1/logs/${idObj}`,{
                method: "DELETE"
            })
            .then(resp =>resp.json())
            .then(data => dispatch({type: "fetched logs", payload: data})) 
        }
    } else if (state.update){
        const obj = moodLogConverter(state)
        return function(dispatch){
            fetch(`http://localhost:3000/api/v1/logs/${idObj}`,{
                method: "PATCH",
                headers: {
                    "content-type":"application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    log:
                        {user_id: user.id,
                        mood_id: obj.mood,
                        tag1: obj.tag1,
                        tag2: obj.tag2,
                        tag3: obj.tag3,
                        tag4: obj.tag4,
                        tag5: obj.tag5,
                    }
                })
            })
            .then(resp =>resp.json())
            .then(data => dispatch({type: "update log", payload: data})) 
        }
    }
}
// export const changeMood = (idObj, state, user) => {
//     // console.log("in change mood action", state)

//     if (state.delete){
//         console.log("in action for deleting mood", idObj)
       
//         return function(dispatch){
//             fetch(`http://localhost:3000/api/v1/logs/${idObj}`,{
//                 method: "DELETE"
//             })
//             .then(resp =>resp.json())
//             .then(data => {
//                 fetch(`http://localhost:3000/api/v1/users/${user.user.id}`)
//                 .then( resp => resp.json())
//                 .then(data => dispatch({type: "logged in user", payload: data}))
//             } ) // 
//         }
//     } else if (state.update){
//         const obj = moodLogConverter(state)
//         console.log("updating in action", idObj, user)
//         return function(dispatch){
//             fetch(`http://localhost:3000/api/v1/logs/${idObj}`,{
//                 method: "PATCH",
//                 headers: {
//                     "content-type":"application/json",
//                     Accept: "application/json"
//                 },
//                 body: JSON.stringify({
//                     log:
//                         {user_id: user.id,
//                         mood_id: obj.mood,
//                         tag1: obj.tag1,
//                         tag2: obj.tag2,
//                         tag3: obj.tag3,
//                         tag4: obj.tag4,
//                         tag5: obj.tag5,
//                     }
//                 })
//             })
//             .then(resp =>resp.json())
//             .then(data => {
//                 fetch(`http://localhost:3000/api/v1/users/${user.user.id}`)
//                 .then( resp => resp.json())
//                 .then(data => dispatch({type: "logged in user", payload: data})) 
//         }) //dispatch({type: "update log", payload: data})
//         }
//     }
// }

export const submitLog = (state, user) => {
    const obj = moodLogConverter(state)
   
    if (state.request === "add"){
        return function(dispatch){
            fetch("http://localhost:3000/api/v1/logs",{
                method: "POST",
                headers: {
                    "content-type":"application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    log:
                        {user_id: user.user.id,
                        mood_id: obj.mood,
                        tag1: obj.tag1,
                        tag2: obj.tag2,
                        tag3: obj.tag3,
                        tag4: obj.tag4,
                        tag5: obj.tag5,
                    }
                })
            })
            .then(resp =>resp.json())
            .then(data => dispatch({type: "fetched logs", payload: data})) //dispatch({type: "logged in user", payload: data})
        }
    } 
}

export const getUser = (userId) => {
    return function(dispatch){
    fetch(`http://localhost:3000/api/v1/users/${userId}`)
                .then(resp => resp.json())
                .then(data => dispatch({type: "logged in user", payload: data}))
    }
}