import { useState, useEffect } from "react";
import "./App.css";
import TaskColumn from "./assets/components/TaskColumn";
import TaskForm from "./assets/components/TaskForm";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  // ★ 물방울은 처음 한 번만 랜덤 생성
  const [bubbles] = useState(() =>
    Array.from({ length: 7 }).map((_, i) => {
      const size = 120 + Math.random() * 80;
      const dx = -30 - Math.random() * 80;
      return {
        size,
        dx,
        left: 60 + Math.random() * 40,
        top: -20 - Math.random() * 50,
        duration: 14 + Math.random() * 6,
        delay: i * 1.7,
      };
    })
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  return (
    <>
      <div className="bubbles">
        {bubbles.map((b, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              width: b.size,
              height: b.size,
              left: `${b.left}%`,
              top: `${b.top}vh`,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
              "--dx": `${b.dx}vw`,
            }}
          />
        ))}
      </div>

      <div className="board">
        <div className="app">
          <TaskForm setTasks={setTasks} />
          <main className="app_main">
            <TaskColumn
              title="할 일"
              icon={todoIcon}
              tasks={tasks}
              status="todo"
              handleDelete={handleDelete}
            />
            <TaskColumn
              title="진행중"
              icon={doingIcon}
              tasks={tasks}
              status="doing"
              handleDelete={handleDelete}
            />
            <TaskColumn
              title="완료"
              icon={doneIcon}
              tasks={tasks}
              status="done"
              handleDelete={handleDelete}
            />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
