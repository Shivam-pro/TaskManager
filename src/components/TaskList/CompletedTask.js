const CompletedTask = ({ items, color }) => {
  return (
    <div className={'task-box ' + color}>
      <div className="task-head">
        <div className="date">{items.task_date}</div>
      </div>
      <div className="task-content">
        <h2>{items.task_title}</h2>
        <p>{items.task_description}</p>
      </div>
    </div>
  )
}

export default CompletedTask
