import React, { useState } from "react";
import "./styles/addtaskform.css";
import { AnchorTag } from "../typography";
import { AddButton, CancelButton } from "../button";

interface IAddTaskFormProps {
  formNum: number;
  onAdd: any;
}

export default function AddTaskForm(props: IAddTaskFormProps) {
  const [editing, setEditing] = useState<boolean>(false);
  const onSubmit = (event: any) => {
    event.preventDefault();
    // const taskTitle = textInput.value.trim();
    const listNumber = props.formNum;
    console.log(listNumber);
    // if (taskTitle && this.props.onAdd) {
    //   props.onAdd(taskTitle, listNumber);
    // }
    // textInput.value = "";
  };

  if (!editing) {
    return (
      <div className="open-add-button" onClick={() => setEditing(true)}>
        <AnchorTag href="#" title="Add a task">
          Add a task +
        </AnchorTag>
      </div>
    );
  }

  return (
    <form className="card add-task-form" onSubmit={e => onSubmit(e)}>
      {/* <input
                type="text"
                class="task-input"
                ref={input => (this.textInput = input)}
                aria-label="Add a task"
                id="taskInput"
              /> */}
      <div className="buttons-surround">
        <AddButton>Add Task</AddButton>
        <CancelButton onClick={() => setEditing(false)}>Cancel</CancelButton>
      </div>
    </form>
  );
}
