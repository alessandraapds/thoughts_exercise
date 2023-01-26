import React, { useEffect } from "react";

export function Thought({ removeThought, thought }) {
  const handleRemoveClick = (event) => {
    event.preventDefault();
    removeThought(thought.id);
  };

  useEffect(() => {
    const timeLeft = thought.expiresAt - Date.now();

    const timeout = setTimeout(() => {
      removeThought(thought.id);
    }, timeLeft);

    return () => {
      clearTimeout(timeout);
    };
  }, [thought]);

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}
