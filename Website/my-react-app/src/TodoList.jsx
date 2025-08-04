import React,{useState} from 'react';

function ToDoList(){
    const [task,setTask]=useState(["Eat Breakfast","Take dog"]);
    const [newTask,setNewTask]=useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);

    }

    function handleAddTask(){
        if(newTask.trim()!=="")
        setTask(t=>[...task,newTask])
        setNewTask("");

    }

    function handleRemoveTask(index){
        setTask(task.filter((_,i)=> i!==index))

    }

    function moveTaskUp(index){
        if(index>0){
            const updatedTasks=[...task];
            [updatedTasks[index],updatedTasks[index-1]]=
            [updatedTasks[index-1],updatedTasks[index]];
            setTask(updatedTasks)
        }

    }
    function moveTaskDown(index){
         if(index <= task.length-1){
            const updatedTasks=[...task];
            [updatedTasks[index+1],updatedTasks[index]]=
            [updatedTasks[index],updatedTasks[index+1]];
            setTask(updatedTasks)
        }

    }

    return(
        <div className='todo-List'>
            <h1>To-Do-List</h1>
            <div>
                <input type="text" placeholder='Enter a task...' value={newTask} onChange={handleInputChange}></input>
                <button className='add-task-button' onClick={handleAddTask}>Add</button>
            </div>
            <ol>
                {task.map((task,index)=> <li key={index}>
                    <span className='text'>{task}</span>
                            <button className='delete-button' onClick={()=>handleRemoveTask(index)}>Delete</button>
                            <button className='move-button' onClick={()=>moveTaskUp(index)}>👆</button>
                            <button className='move-button' onClick={()=>moveTaskDown(index)}>👇</button>
                </li>)}
            </ol>

        </div>
    )
}
export default ToDoList;