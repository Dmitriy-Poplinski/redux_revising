import { 
    ADD_CASH, 
    GET_CASH, 
    ADD_CUSTOMER,
    ADD_MANY_CUSTOMERS, 
    REMOVE_CUSTOMER,
    GET_COMMENTS 
} from "./actions"

export const addCashAC = (payload) => ({type: ADD_CASH, payload})
export const getCashAC = (payload) => ({type: GET_CASH, payload})
export const addCustomerAC = (payload) => ({type: ADD_CUSTOMER, payload})
export const addManyCustomersAC = (payload) => ({type: ADD_MANY_CUSTOMERS, payload})
export const removeCustomerAC = (payload) => ({type: REMOVE_CUSTOMER, payload})
export const getCommentsAC = (payload) => ({type: GET_COMMENTS, payload})