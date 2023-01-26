import React, { useState } from "react";
import { generateId, getNewExpirationTime } from "./utilities";

export function AddThoughtForm({ addThought }) {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (text.length > 1) {
      const newThought = {
        id: generateId(),
        text: text,
        expiresAt: getNewExpirationTime(),
      };

      addThought(newThought);
    } else {
      alert("Type something");
    }

    setText("");
  };

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <button type="submit" value="Add">
        Add
      </button>
    </form>
  );
}
