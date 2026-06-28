import { useState } from "react";
import api from "../api";

function TaskForm({ onSuccess }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      await api.post("/", {
        title: title.trim(),
        description: description.trim(),
      });

      setTitle("");
      setDescription("");

      if (onSuccess) onSuccess();
      alert("Task added successfully!");
    } catch (error) {
      alert("Failed to add task. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Task Title</label>
        <input
          type="text"
          placeholder="Enter task title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={loading}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          placeholder="Enter task description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={loading}
        />
      </div>

      <button className="submit-btn" type="submit" disabled={loading}>
        <span>✓</span>
        {loading ? "Adding..." : "Add Task"}
      </button>
    </form>
  );
}

export default TaskForm;