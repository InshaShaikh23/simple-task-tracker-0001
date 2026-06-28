import api from "../api";

function TaskCard({ task, fetchTasks }) {
  const deleteTask = async () => {
    if (!window.confirm(`Delete "${task.title}"?`)) return;

    try {
      await api.delete(`/${task._id}`);
      fetchTasks();
    } catch (error) {
      alert("Failed to delete task");
    }
  };

  const toggleStatus = async () => {
    try {
      await api.put(`/${task._id}`, {
        status: task.status === "Pending" ? "Completed" : "Pending",
      });
      fetchTasks();
    } catch (error) {
      alert("Failed to update task");
    }
  };

  const isCompleted = task.status === "Completed";
  const date = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className={`task-item ${isCompleted ? "completed" : ""}`}>
      <div className="task-main">
        <div className="task-header-row">
          <h3>{task.title}</h3>
          <span className={`task-status ${isCompleted ? "completed" : "pending"}`}>
            {task.status}
          </span>
        </div>

        {task.description && (
          <div className="task-description">{task.description}</div>
        )}

        <div className="task-meta">
          <span className="date">📅 {date}</span>
        </div>
      </div>

      <div className="task-actions">
        <button
          className={`btn-toggle ${isCompleted ? "is-completed" : ""}`}
          onClick={toggleStatus}
          title={isCompleted ? "Reopen task" : "Mark as complete"}
        >
          {isCompleted ? "↺" : "✓"}
        </button>
        <button className="btn-delete" onClick={deleteTask} title="Delete task">
          🗑
        </button>
      </div>
    </div>
  );
}

export default TaskCard;