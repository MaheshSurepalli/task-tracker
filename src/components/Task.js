import {FaTimes} from 'react-icons/fa'
const task = ({task, onDelete, onToggle
}) => {
  return (
    <div className = {`task ${task.remainder? 'reminder': ''}`}onDoubleClick={()=>{onToggle(task.id)}} >
        <h3>{task.task} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={()=>onDelete(task.id)}/></h3>
        <p>{task.day}</p>
    </div>
  )
}

export default task