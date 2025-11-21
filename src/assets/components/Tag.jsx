import "./Tag.css";

const tagStyle = {
  HTML: { backgroundColor: "#f5da21" },
  CSS: { backgroundColor: "#15d4e6" },
  JavaScript: { backgroundColor: "#d84149ff" },
  React: { backgroundColor: "#3fd68bce" },
  default: { backgroundColor: "#f9f9f9" },
};

export default function Tag({ tagName, selectTag, selected }) {
  const style = selected
    ? tagStyle[tagName] || tagStyle.default
    : tagStyle.default;

  return (
    <button
      type="button"
      className="tag"
      style={style}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
}
