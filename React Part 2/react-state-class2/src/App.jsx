import './App.css';
import Lottery from './Lottery';
import LudoBoard from './LudoBoard';
import TodoList from './TodoList';
import TicketNum from './TicketNum';
import Ticket from './Ticket';
import { sum } from './helper';

function App() {

  let winCondition = (ticket) => {
    return ticket.every((num) => num === ticket[0]);
  }

  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
    </>
  )
}

export default App
