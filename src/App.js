import Header from './components/Header'
import './App.css';
import Tasks from './components/Tasks';
import {useState} from 'react';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState([
    {
     id : 1,
     task : 'Book Reading',
     day : 'April 1st 2022',
     remainder : true
    },
    {
      id : 2,
      task : 'Meeting friend',
      day : 'April 2nd 2022',
      remainder : true
     },
     {
      id : 3,
      task : 'Dental Checkup',
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
    const id = Math.floor(Math.random()*10000);
    const newTask = {id,...task};
    setTasks([...tasks,newTask])
  }

  return (
    <div className="container">
      <Header showAdd = {showAddTask} onAdd={()=>{setShowAddTask(!showAddTask)}} title="Task Tracker"></Header>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length>0 ? <Tasks onToggle = {toggleRemainder} tasks={tasks} onDelete={deleteTask}/> : "No Tasks to show"}
    </div>
  );
}

export default App;
