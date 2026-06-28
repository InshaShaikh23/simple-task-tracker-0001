import TaskCard from "./TaskCard";

function TaskList({ tasks, fetchTasks }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <div className="icon">📋</div>
        <h3>No tasks yet</h3>
        <p>Create your first task to get started</p>
      </div>
    );
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} fetchTasks={fetchTasks} />
      ))}
    </div>
  );
}

export default TaskList;