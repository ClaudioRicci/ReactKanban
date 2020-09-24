import React from "react";
import "./styles/taskcard.scss";
import { H3Tag, H4Tag, PTag, PreTag } from "../typography";

interface ITaskCardProps {
  uniqueId: string;
  taskTitle: string;
  taskDescription: string;
  taskComment: string;
  onDragStart: any;
}

const TaskCard: React.SFC<ITaskCardProps> = props => {
  return (
    <div
      className="task-card"
      draggable="true"
      id={props.uniqueId}
      onDragStart={props.onDragStart}
    >
      <div className="task-card-inner-section">
        <PreTag>NAT-{props.uniqueId}</PreTag>
        <H3Tag>{props.taskTitle}</H3Tag>
        <span>
          <H4Tag>Description: </H4Tag>
          <PTag>{props.taskDescription}</PTag>
        </span>
        <span>
          <H4Tag>Comments: </H4Tag>
          <PTag>{props.taskComment}</PTag>
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
