import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../delete.png";

export default function TaskCard({ title, tags, handleDelete, index }) {
  return (
    <div className="task_card">
      <p className="task_text">{title}</p>

      <div className="task_card_bottom_line">
        <div>
          {tags.map((tag, i) => (
            <Tag key={i} tagName={tag} selected={true} />
          ))}
        </div>

        <div className="task_delete" onClick={() => handleDelete(index)}>
          <img src={deleteIcon} alt="" className="delete_icon" />
        </div>
      </div>
    </div>
  );
}
