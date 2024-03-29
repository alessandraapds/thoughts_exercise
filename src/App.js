import React, { useState } from "react";
import ReactDOM from "react-dom";
import { AddThoughtForm } from "./components/AddThoughtForm";
import { Thought } from "./components/Thought";
import { generateId, getNewExpirationTime } from "./components/utilities";
import "./styles.css";
import "./App.css";

function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: "This is a place for your passing thoughts.",
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addThought = (thought) => {
    setThoughts((thoughts) => [thought, ...thoughts]);
  };

  const removeThought = (id) => {
    setThoughts((thoughts) => thoughts.filter((thought) => id !== thought.id));
  };

  return (
    <div className="App" id="app">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought
              removeThought={removeThought}
              key={thought.id}
              thought={thought}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

// ReactDOM.render(<App />, document.getElementById("app"));

export default App;
