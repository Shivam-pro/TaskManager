import { useContext } from 'react';
import { AuthUser } from '../../context/AuthContext';

const Taskbox = ({ items, color, userData }) => {
    const data = useContext(AuthUser);
    if (!data || !Array.isArray(data.employees)) {
        return null;
    }
    const employees = data.employees;

    return (
        <div className={'task-box ' + color}>
            <div className="task-head">
                <div className="date">{items.task_date}</div>
                {items.newtask ? <button className='catagory'>new</button> : ""}
            </div>
            <div className="task-content">
                <h2>{items.task_title}</h2>
                <p>{items.task_description}</p>
            </div>
            {items.newtask ? <div className="buttons-div">
                <button className="tasks completed" onClick={() => {
                    items.newtask = false;
                    items.completed = true;
                    for (let i = 0; i < employees.length; i++) {
                        if (employees[i].id == userData.id) {
                            employees[i] = userData
                        }
                    }
                    localStorage.setItem("currentuser", JSON.stringify(userData))
                    localStorage.setItem("employee", JSON.stringify(employees));
                }}>Completed</button>
                <button className="tasks failed" onClick={() => {
                    items.newtask = false;
                    items.failed = true;
                    for (let i = 0; i < employees.length; i++) {
                        if (employees[i].id == userData.id) {
                            employees[i] = userData
                        }
                    }
                    localStorage.setItem("currentuser", JSON.stringify(userData))
                    localStorage.setItem("employee", JSON.stringify(employees));
                }}>Failed</button>
            </div> : ""}
        </div>
    )
}

export default Taskbox
