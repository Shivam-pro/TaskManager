import { useState } from 'react'
import Taskbox from '../TaskList/Taskbox';
import FailedTask from '../TaskList/FailedTask';
import CompletedTask from '../TaskList/CompletedTask';

const Tasks = ({ userData }) => {
    let [Task, setTask] = useState("all");
    function selectask(e) {
        switch (e.target.innerHTML) {
            case "All Tasks":
                setTask("all")
                break;
            case "New":
                setTask("new")
                break;
            case "Completed":
                setTask("completed")
                break;
            case "Failed":
                setTask("failed")
                break;
            default:
                console.log('error occured in selecting tasks');
                break;
        }
    }
    return (
        <>
            <div className='tasklist-container'>
                <div className='tasks all' onClick={selectask}>
                    All Tasks
                </div>
                <div className="tasks new" onClick={selectask}>
                    New
                </div>
                <div className="tasks completed" onClick={selectask}>
                    Completed
                </div>
                <div className="tasks failed" onClick={selectask}>
                    Failed
                </div>
            </div>
            <div className='task-container'>
                {Task == "all" ? 
                userData.tasks.map((items, index)=>{
                    return(
                    <Taskbox key={index} items={items} color={Task} userData={userData}/>
                )
                }) : Task == "new" ? userData.tasks.map((items, index)=>{
                    return(
                        items.newtask ?
                    <Taskbox key={index} items={items} color={Task} userData={userData}/>:""
                )
                }): Task == "completed" ? userData.tasks.map((items,index)=>{
                    return(
                        items.completed ? 
                    <CompletedTask key={index} items={items} color={Task} userData={userData}/>:""
                )
                }): Task == "failed" ? userData.tasks.map((items, index)=>{
                    return(
                        items.failed ? 
                    <FailedTask key={index} items={items} color={Task} userData={userData}/>:""
                )
                }):""}
            </div>
        </>

    )
}

export default Tasks
