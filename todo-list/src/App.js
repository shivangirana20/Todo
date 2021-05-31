
import './App.css';
import Header from './Components/Header';
import { Todos } from './Components/Todos';
import { Todo } from './Components/Todo';
import { Footer } from './Components/Footer';
import { useState } from 'react';

function App() {
  const onDelete =(todo) =>{

    console.log('I am onDelete',todo);
    setTodos(todos.filter((e)=>{

     return e!==todo;
    }))

  }
  const [todos, setTodos] = useState([
    
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "Go to the gym",
      desc: "You need to go to the gym to get this job done"
    },
    {
      sno: 3,
      title: "Go to the parlour",
      desc: "You need to go to the parlour to get this job done"
    },
  
  ]);
  return (
   <>
      <Header title="Todos List" searchBar={false}/> 
      { /* passing js object todos */ }
      <Todos todos={todos} onDelete={onDelete}/> 
     
      <Footer/>
    </>
  );
}

export default App;
