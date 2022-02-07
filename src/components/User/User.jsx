import { useDispatch } from 'react-redux';

import { removeCustomerAC } from '../../redux/reducers/actionsCreators';

import { Comment } from './../Comment/Comment';

import classes from './User.module.css'



export const User = ({customer, number}) => {
    const dispatch = useDispatch()

    const removeCustomer = (id) => {
        dispatch(removeCustomerAC(id))
    }

    return (
        <div key={customer.id} onClick={() => removeCustomer(customer.id)} >
            {number}.{customer.name}
            {customer.hasOwnProperty('comments') ? 
                customer.comments.map((comment, index) => 
                    <Comment number={index + 1} name={comment.name} body={comment.body}/>
                )
                :
                null
            }
        </div>
    )
}