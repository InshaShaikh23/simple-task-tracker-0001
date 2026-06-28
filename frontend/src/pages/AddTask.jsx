import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";

function AddTask() {
  const navigate = useNavigate();

  return (
    <div className="container">

      <div className="card">
        <div className="card-icon">+</div>
        <h2 className="card-title">Add New Task</h2>
        <p className="card-subtitle">Fill in the details below to add a new task</p>
        <TaskForm onSuccess={() => navigate("/tasks")} />
      </div>
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back to Home
      </button>

    </div>
  );
}

export default AddTask;