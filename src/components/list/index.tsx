import React from "react";
import TaskCard from "../taskcard";
import AddTaskForm from "./../addtaskform";
import "./styles/list.scss";
import { H2Tag } from "../typography";
import { ULTag, LITag } from "../domElements";

interface IListProps {
  id: number;
  cards: any;
  title: string;
  columnName: string;
  onDragStart: any;
  onDragOver: any;
  onDrop: any;
  onAdd: any;
}

export default function List(props: IListProps) {
  const cards = props.cards.map((card: any, index: number) => (
    <li key={index}>
      <TaskCard {...card} onDragStart={props.onDragStart} />
    </li>
  ));

  return (
    <>
      <H2Tag className={`column-header column-${props.columnName}`}>
        {props.title}
      </H2Tag>
      <ULTag onDragOver={props.onDragOver} onDrop={props.onDrop}>
        {cards}
        <LITag>
          <AddTaskForm formNum={props.id} onAdd={props.onAdd} />
        </LITag>
      </ULTag>
    </>
  );
}
