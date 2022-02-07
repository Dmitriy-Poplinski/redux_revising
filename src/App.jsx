import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap'

import { 
  addCashAC, 
  getCashAC, 
  addCustomerAC, 
} from './redux/reducers/actionsCreators';
import { fetchComents, fetchUsers } from './asyncActions/customers'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { User } from './components/User/User';


function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)
  const addCash = (cash) => {
    dispatch(addCashAC(cash))
  }

  const getCash = (cash) => {
    dispatch(getCashAC(cash))
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAC(customer))
  }

  return (
    <div className='app'>
      
      <div className='button-wrapper'>
        <Button variant='outline-success' onClick={() => addCash(Number(prompt()))}>Пополнить счет</Button>
        <div className='cash'>БАЛАНС: {cash}</div>        
        <Button variant="outline-primary" onClick={() => getCash(Number(prompt()))}>Снять со счета</Button>
      </div>
      <div className='button-wrapper'>
        <Button variant='outline-success' onClick={() => addCustomer(prompt())}>Добавить клиента</Button>
        <Button variant="outline-danger" onClick={() => dispatch(fetchUsers())}>Добавить клиентов из базы</Button>
        <Button variant="outline-warning" onClick={() => dispatch(fetchComents())}>Добавить коментарии из базы</Button>
      </div>
      
      <div className='customers'>
      {customers.length > 0 ?
        <div className='customer'>{customers.map((customer, index) => 
          <User customer={customer} number={index + 1}/>
        )}
        </div>
        :
        <div>Клиенты отсутствуют!</div>  
      }
      </div>
    </div>
  );
}

export default App;
