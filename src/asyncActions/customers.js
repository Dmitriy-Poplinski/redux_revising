import { addManyCustomersAC, getCommentsAC } from "../redux/reducers/actionsCreators"

export const fetchUsers = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(addManyCustomersAC(json)))
    }
}

export const fetchComents = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(json => {
                let posts = []
                for (let post in json) {
                    if (json[post].postId <= 10) {
                        posts.push(json[post])
                    }
                }
                dispatch(getCommentsAC(posts))
            })
    }
}