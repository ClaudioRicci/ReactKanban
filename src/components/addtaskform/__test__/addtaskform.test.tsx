import React from "react";
import ReactDOM from "react-dom";
import AddTaskForm from "..";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AddTaskForm formNum={1} onAdd />, div);
  ReactDOM.unmountComponentAtNode(div);
});
