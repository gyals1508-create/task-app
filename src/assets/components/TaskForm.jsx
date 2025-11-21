import { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

export default function TaskForm({ setTasks }) {
  // 객체로 입력값 관리
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  // input / select 공통 변경 처리
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  // 태그 선택 / 해제
  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      // 이미 있으면 제거
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => ({ ...prev, tags: filterTags }));
    } else {
      // 없으면 추가
      setTaskData((prev) => ({ ...prev, tags: [...prev.tags, tag] }));
    }
    console.log(taskData.tags); // 태그 선택 상태 확인용
  };

  // 선택된 태그인지 확인 (있으면 true, 없으면 false)
  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  // submit 실행: tasks 배열에 새 task 추가
  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => [...prev, taskData]); // 새 task 추가
    console.log(taskData);

    // 입력값 초기화 (원하면 유지해도 됨)
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          className="task_input"
          placeholder="훈민정음을 입력 해주세요..."
          value={taskData.task}
          onChange={handleChange}
        />

        <div className="task_form_bottom_line">
          <div>
            <Tag
              tagName="HTML"
              selectTag={selectTag}
              selected={checkTag("HTML")}
            />
            <Tag
              tagName="CSS"
              selectTag={selectTag}
              selected={checkTag("CSS")}
            />
            <Tag
              tagName="JavaScript"
              selectTag={selectTag}
              selected={checkTag("JavaScript")}
            />
            <Tag
              tagName="React"
              selectTag={selectTag}
              selected={checkTag("React")}
            />
          </div>

          <div>
            <select
              name="status"
              className="task_status"
              value={taskData.status}
              onChange={handleChange}
            >
              <option value="todo">할일</option>
              <option value="doing">진행중</option>
              <option value="done">완료</option>
            </select>

            <button type="submit" className="task_submit">
              + 추가
            </button>
          </div>
        </div>
      </form>
    </header>
  );
}
