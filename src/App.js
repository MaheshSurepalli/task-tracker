import Header from './components/Header'
import './App.css';
import Tasks from './components/Tasks';
import {useState} from 'react';
import AddTask from './components/AddTask';

function App() {
  const [tasks,setTasks] = useState([
    {
     id : 1,
     text : 'Book Reading',
     day : 'April 1st 2022',
     remainder : true
    },
    {
      id : 2,
      text : 'Meeting friend',
      day : 'April 2nd 2022',
      remainder : true
     },
     {
      id : 3,
      text : 'Dental Checkup',
      day : 'April 3rd 2022',
      remainder : true
     },

  ])

  const deleteTask= (id)=>{
    setTasks(tasks.filter((task)=>task.id !== id))
  } 

  const toggleRemainder = (id)=>{
    setTasks(tasks.map((task)=>task.id === id? {...task,remainder: !task.remainder}: task))
  }

  const addTask = (task)=>{
    console.log(task)
  }

  return (
    <div className="container">
      <Header title="Task Tracker"></Header>
      <AddTask onAdd={addTask}/>
      {tasks.length>0 ? <Tasks onToggle = {toggleRemainder} tasks={tasks} onDelete={deleteTask}/> : "No Tasks to show"}
    </div>
  );
}

export default App;
