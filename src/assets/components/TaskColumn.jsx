import "./TaskColumn.css";
import TaskCard from "./TaskCard";

export default function TaskColumn({
  title,
  icon,
  tasks,
  status,
  handleDelete,
}) {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt="icon" />
        {title}
      </h2>

      {tasks.map((task, index) =>
        task.status === status ? (
          <TaskCard
            key={index}
            title={task.task}
            tags={task.tags}
            index={index} // ✅ 원본 tasks의 index
            handleDelete={handleDelete}
          />
        ) : null
      )}
    </section>
  );
}
