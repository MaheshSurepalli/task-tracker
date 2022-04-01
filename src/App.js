import Header from './components/Header'
import './App.css';
import Tasks from './components/Tasks';
import {useState} from 'react';

function App() {
  const [tasks,setTasks] = useState([
    {
     id : 1,
     text : 'Book Reading',
     day : 'April 1st 2022'
    }
  ])

  return (
    <div className="container">
      <Header title="Task Tracker"></Header>
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
