import React, {useState} from "react"

function ToDoList(){
    const [task, setTask] = useState(["Eat","Drink","Sleep"])
    const [newTask,setNewTask] = useState("")

    function addTask(){
        if(newTask.trim() !==""){
        setTask(t=>[...t,newTask])
        setNewTask("")
    }
    }

    function removeTask(index){
        setTask(t=>task.filter((element,i)=> i!=index))
    }

    function removeTaskSp(index){
        let newList = [...task]
        newList.splice(index,1)
        setTask(newList)
    }

    function moveUp(index){
        if(index>0){
        const updated_Task = [...task];
        [updated_Task[index],updated_Task[index-1]] = [updated_Task[index-1],updated_Task[index]];
        setTask(updated_Task);
        }
    }

    function moveDown(index){
        if(index<task.length-1){
            const updated_Task = [...task];
            [updated_Task[index],updated_Task[index+1]] = [updated_Task[index+1],updated_Task[index]];
            setTask(updated_Task);
        }

    }

    function inputChange(event){
        setNewTask(nt=>event.target.value)
    }

    return(
        <div className="container">
            <h1 className="head">To-Do List</h1>

            <input className="data" type="text" value={newTask} onChange={inputChange} placeholder="Enter Task..."/>
            <button className="Add-btn" onClick={addTask}>Add</button>

            <ol>
                {task.map((element,index)=><li key={index}>
                    <div className="container2">
                    <span className="Text">{element}</span>
                    <button className="Delete-btn" onClick={()=>removeTask(index)}>Delete</button>
                    <button onClick={()=>moveUp(index)} className="Up-down">👆</button>
                    <button onClick={()=>moveDown(index)} className="Up-down">👇</button>
                    </div>
                </li>)}
            </ol>
        </div>
    )
}

export default ToDoList