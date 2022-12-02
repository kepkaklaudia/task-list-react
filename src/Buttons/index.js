import React from "react";
import "./style.css"

const Buttons = ({ tasks, hideDoneTasks }) => (
  <div className="buttons">
    {tasks.length > 0 && (
      <React.Fragment>
        <button className="buttons_button">
          {hideDoneTasks ? "Pokaż " : "Ukryj "} ukończone
        </button>
        <button
          className="buttons_button"
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </button>
      </React.Fragment>
    )}
  </div>
);

export default Buttons;