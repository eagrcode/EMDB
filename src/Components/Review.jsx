// react
import { useState } from "react";

// libraries
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

function Review({ author, content, created }) {
  //state
  const [isOpen, setIsOpen] = useState(false);

  // Toggle open review card
  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <li className="review-card">
      <div className="review-card-top">
        <h3 className="review-author">{author}</h3>
        <span className="created-tag">{created.substring(10, -1)}</span>
        {isOpen ? (
          <FiChevronDown className="review-card-icon" size={30} onClick={toggleOpen} />
        ) : (
          <FiChevronRight className="review-card-icon" size={30} onClick={toggleOpen} />
        )}
      </div>
      <div className={`content-container ${isOpen ? "active" : ""}`}>
        <p className="review-content">{content}</p>
      </div>
    </li>
  );
}

export default Review;
