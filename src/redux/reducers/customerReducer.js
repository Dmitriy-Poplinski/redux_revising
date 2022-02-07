import { ADD_CUSTOMER, REMOVE_CUSTOMER, ADD_MANY_CUSTOMERS, GET_COMMENTS } from "./actions"

const defaultState = {
    customers: []
}

export const customReducer = (state=defaultState, action) => {
    switch(action.type) {
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]}
        case ADD_MANY_CUSTOMERS:
            return {...state , customers: [...state.customers, ...action.payload]}
        case GET_COMMENTS:
            let customersWithComments = getCustomersWithComments(state.customers, action.payload)
            return {...state, customers: customersWithComments}
        case REMOVE_CUSTOMER:
            return {...state, customers: [...state.customers.filter(customer => customer.id !== action.payload)]}
        default:
            return state
    }
  }

const getCustomersWithComments = (customers, payload) => {
    let customersWithComments = []
    for (let customer in customers) {
        let customerWithComments = {...customers[customer], comments: payload.filter(post => {
            return post.postId === customers[customer].id
        })}
        customersWithComments.push(customerWithComments)
    }
    return customersWithComments
}