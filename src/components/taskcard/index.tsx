import React from "react";
import "./styles/taskcard.css";
import { H3Tag, H4Tag, PTag } from "../typography";

interface ITaskCardProps {
  timeId: string;
  taskTitle: string;
  taskDescription: string;
  taskComments: string;
  onDragStart: any;
}

const TaskCard: React.SFC<ITaskCardProps> = props => {
  return (
    <div
      className="task-card"
      draggable="true"
      id={props.timeId}
      onDragStart={props.onDragStart}
    >
      <div className="task-card-inner-section">
        <H3Tag>{props.taskTitle}</H3Tag>
        <span>
          <H4Tag>Description: </H4Tag>
          <PTag>{props.taskDescription}</PTag>
        </span>
        <span>
          <H4Tag>Comments: </H4Tag>
          <PTag>{props.taskComments}</PTag>
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
