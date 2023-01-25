import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { useState } from "react";

function Review({ author, content, created }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="review-card">
      <div className="review-card-top">
        <h3 className="review-author">{author}</h3>
        <span className="created-tag">{created.substring(10, -1)}</span>
        {isOpen ? (
          <FiChevronDown
            className="review-card-icon"
            size={30}
            onClick={toggleOpen}
          />
        ) : (
          <FiChevronRight
            className="review-card-icon"
            size={30}
            onClick={toggleOpen}
          />
        )}
      </div>
      <div className={`content-container ${isOpen ? "active" : ""}`}>
        <p className="review-content">{content}</p>
      </div>
    </div>
  );
}

export default Review;
