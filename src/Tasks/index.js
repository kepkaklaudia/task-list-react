import "./style.css"

const Tasks = ({ tasks, hideDone, removeTask }) => (
  <ul className="list">
    {tasks.map(task => (
      <li
        key={task.id}
        className={`tasksList ${task.done && hideDone ? "tasksList--hidden" : ""}`}
      >
        <button className="task__button task__button--toggleDone">
          {task.done ? "✓" : ""}
        </button>
        <span className={`taskContent ${task.done ? " taskContent--done" : ""}`}>
          {task.content}
        </span>
        <button 
        onClick={() => removeTask(task.id)} 
        className="task__button task__button--remove"
        >
          🗑
        </button>
      </li>
    ))}
  </ul >
);

export default Tasks;