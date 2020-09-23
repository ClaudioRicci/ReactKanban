import React from "react";
import "./styles/addtaskform.css";

interface IAddTaskFormProps {
  formNum: number;
  onAdd: any;
}

interface IAddTaskFormState {
  editing: boolean;
}

export default class AddTaskForm extends React.Component<
  IAddTaskFormProps,
  IAddTaskFormState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      editing: false
    };
  }

  onSubmit(event: any) {
    event.preventDefault();
    // const taskTitle = this.textInput.value.trim();
    const listNumber = this.props.formNum;
    console.log(listNumber);
    // if (taskTitle && this.props.onAdd) {
    //   this.props.onAdd(taskTitle, listNumber);
    // }
    // this.textInput.value = "";
  }

  setEditing(editing: boolean) {
    this.setState({
      editing
    });
  }

  render() {
    if (!this.state.editing) {
      return (
        <div className="open-add-button" onClick={() => this.setEditing(true)}>
          <a href="#" title="Add a task">
            Add a task!
          </a>
        </div>
      );
    }
    return (
      <form className="card add-task-form" onSubmit={e => this.onSubmit(e)}>
        {/* <input
          type="text"
          class="task-input"
          ref={input => (this.textInput = input)}
          aria-label="Add a task"
          id="taskInput"
        /> */}
        <div>
          <button className="button add-button">Add Task</button>
          <button
            className="button cancel-button"
            onClick={() => this.setEditing(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}
