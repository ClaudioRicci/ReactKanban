import React from "react";
import ReactDOM from "react-dom";
import TaskCard from "..";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TaskCard taskTitle="test title" id={1} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
