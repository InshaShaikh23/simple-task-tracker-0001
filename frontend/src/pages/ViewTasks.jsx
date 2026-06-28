import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import TaskList from "../components/TaskList";

function ViewTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await api.get("/");
      setTasks(res.data);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container">
      
      <div className="task-header">
        <div className="task-header-title">
          <span className="icon-badge">📋</span>
          <div>
            <h2>Your Tasks</h2>
            <div className="sub">Here's a list of all your tasks</div>
          </div>
        </div>
        {!loading && (
          <span className="task-count">
            {tasks.length}
            <span className="label">Total Tasks</span>
          </span>
        )}
      </div>

      {loading ? (
        <div className="loading-state">Loading tasks...</div>
      ) : (
        <TaskList tasks={tasks} fetchTasks={fetchTasks} />
      )}

      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back to Home
      </button>

    </div>
  );
}

export default ViewTasks;