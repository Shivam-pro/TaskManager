import React, { useState } from 'react'
const Createtask = ({ userData }) => {
    const [task_title, setTask_title] = useState("");
    const [asignTo, setAsignTo] = useState("");
    const [task_description, setTask_description] = useState("");
    const [task_date, setTask_date] = useState("");
    const [category, setCategory] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            task_title,
            task_date,
            task_description,
            category,
            newtask: true,
            completed: false,
            failed: false
        };
        const data = JSON.parse(localStorage.getItem("employee"));
        data.forEach((e) => {
            if (e.name == asignTo) {
                e.tasks.push(newTask);
            }
        })
        localStorage.setItem("employee", JSON.stringify(data));
        console.log(data);
        setTask_title("");
        setTask_date("");
        setTask_description("");
        setCategory("");
        setAsignTo("");
    }
    return (
        <div className='createtask-container'>
            <form className='form' onSubmit={handleSubmit}>
                <div className='info'>
                    <div className="input-boxes">
                        <label htmlFor="title">Task Titel</label>
                        <input type="text" placeholder='Asign Task'
                            value={task_title}
                            onChange={(e) => {
                                setTask_title(e.target.value);
                            }} />
                    </div>
                    <div className="input-boxes">
                        <label htmlFor="title">Date</label>
                        <input type="date"
                            value={task_date}
                            onChange={(e) => {
                                setTask_date(e.target.value);
                            }} />
                    </div>
                    <div className="input-boxes">
                        <label htmlFor="title">Asign To</label>
                        <input type="text" placeholder='Employee Name'
                            value={asignTo}
                            onChange={(e) => {
                                setAsignTo(e.target.value);
                            }} />
                    </div>
                    <div className="input-boxes">
                        <label htmlFor="title">Category</label>
                        <input type="text" placeholder='Design, dev, etc'
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value);
                            }} />
                    </div>
                </div>
                <div className="desc">
                    <label htmlFor="Description">Description</label>
                    <textarea name="desc" id="desc" placeholder='Add Description'
                        value={task_description}
                        onChange={(e) => {
                            setTask_description(e.target.value);
                        }}></textarea>
                    <button>Create Task</button>
                </div>
            </form>
        </div>
    )
}
export default Createtask
