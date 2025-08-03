const Alltasks = () => {
  const data = JSON.parse(localStorage.getItem("employee"))

  return (
    <div className='alltask-container'>
      <div className="task">
        <h3>S.No</h3>
        <h3>Employee Name</h3>
        <h3>New Task</h3>
        <h3>Completed</h3>
        <h3>Failed</h3>
      </div>
      {data.map((items, index) => {
        let newtask = 0;
        let completed = 0;
        let failed = 0;

        items.tasks.forEach(task => {
          if (task.newtask) newtask++;
          if (task.completed) completed++;
          if (task.failed) failed++;
        });
        return (
          <div className="employee-tasks" key={index}>
            <h3>{index + 1}</h3>
            <h3>{items.name}</h3>
            <h3>{newtask}</h3>
            <h3>{completed}</h3>
            <h3>{failed}</h3>
          </div>)
      })}
    </div>
  )
}

export default Alltasks
