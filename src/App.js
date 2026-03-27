import { useState, useEffect } from "react"; // 1. Added useEffect here

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState("Medium");

  // 2. This runs the moment the page loads
  useEffect(() => {
    fetchTasks();
  }, []);

  // 3. NEW: Function to GET data from AWS
  const fetchTasks = async () => {
    try {
      const response = await fetch("https://hvlc3ew0ik.execute-api.eu-north-1.amazonaws.com/default/createTask");
      const data = await response.json();
      
      // We map 'taskId' from DynamoDB to 'id' for React
      const savedTasks = data.map(item => ({
        id: item.taskId,
        title: item.title,
        priority: "Cloud" 
      }));
      
      setTasks(savedTasks);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  const addTask = async () => {
    if (input.trim() === "") return;

    try {
      const response = await fetch("https://hvlc3ew0ik.execute-api.eu-north-1.amazonaws.com/default/createTask", {
        method: "POST",
        body: JSON.stringify({ title: input }),
        headers: { "Content-Type": "application/json" }
      });
      
      const data = await response.json();

      const newTask = {
        id: Date.now().toString(), // Using string to match DynamoDB ID type
        title: `${input} (${data.message || "Saved"})`, 
        priority: priority,
      };

      setTasks([...tasks, newTask]);
      setInput("");
    } catch (error) {
      console.error("Cloud Error:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await fetch(`https://hvlc3ew0ik.execute-api.eu-north-1.amazonaws.com/default/createTask?taskId=${id}`, {
        method: "DELETE",
      });
      // Remove it from the screen only after AWS confirms deletion
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error("Delete Error:", error);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>☁️ Smart Task Manager</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task"
          style={{ padding: "8px", marginRight: "10px" }}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <button onClick={addTask} style={{ padding: "8px 15px", cursor: "pointer" }}>
          Add Task
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map(task => (
          <li key={task.id} style={{ 
            background: "#f4f4f4", 
            margin: "10px 0", 
            padding: "10px", 
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <span><strong>{task.title}</strong> — {task.priority}</span>
            <button 
              onClick={() => deleteTask(task.id)} 
              style={{ background: "transparent", border: "none", cursor: "pointer", fontSize: "18px" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;