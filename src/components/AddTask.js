import {useState} from 'react';

const AddTask = ({onAdd}) => {
const [task, setTask] = useState('')
const [day, setDay] = useState('')
const [remainder, setRemainder] = useState(false)

const onSubmit = (e) => {
    e.preventDefault()
    if(!task){
        alert('Please enter a value')
        return
    }
    onAdd({task, day, remainder})
    setTask('')
    setDay('')
    setRemainder(false)

}
  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} placeholder="Enter the task" />
        </div>
        <div className="form-control">
            <label>Day</label>
            <input type="text" value={day} onChange={(e)=>setDay(e.target.value)} placeholder="Enter the day"/>
        </div>
        <div className="form-control form-control-check">
            <label>Set Remainder</label>
            <input type="checkbox" value={task} onChange={(e)=>setRemainder(e.currentTarget.checked)} checked={remainder}/>
        </div>
        <input type="submit" value='Save Task' className="btn btn-block"/>
    </form>
  )
}

export default AddTask