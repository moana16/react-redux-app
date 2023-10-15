import React, {useState} from 'react';
import './App.css';
import { RootState } from './reducers';
import { useSelector ,useDispatch} from 'react-redux/es/exports';
type Props = {
  value : any;
  onIncrement : () => void;
  onDecrement : () => void;
}

function App({value, onIncrement, onDecrement} : Props) {
  const [todoValue, setTodoValue] = useState("");
  const todos : string[] = useSelector((state:RootState)=>state.todos);
  const counter = useSelector((state : RootState)=>state.counter);
  const dispatch = useDispatch();

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  }
  const addTodo = (e : React.FormEvent<HTMLFormElement>) : void => {
    e.preventDefault();
    dispatch({type : 'ADD_TODO', text : todoValue});
    setTodoValue("");
  }
  return (
    <div>
      <p>Clicked : {counter} times</p>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <ul>
        {todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>
      <form onSubmit={addTodo}>
        <input type="text" value={todoValue} onChange={handleChange} />
        <input type='submit' />  
      </form>
    </div>
    
  );
}

export default App;
