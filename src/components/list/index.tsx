import React from "react";
import TaskCard from "../taskcard";
import AddTaskForm from "./../addtaskform";
import "./styles/list.css";
import { H2Tag } from "../typography";
import { ULTag, LITag } from "../domElements";

interface IListProps {
  id: number;
  cards: any;
  title: string;
  onDragStart: any;
  onDragOver: any;
  onDrop: any;
  onAdd: any;
}

export default class List extends React.Component<IListProps, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const cards = this.props.cards.map((card: any, index: number) => (
      <li key={index}>
        <TaskCard {...card} onDragStart={this.props.onDragStart} />
      </li>
    ));

    return (
      <>
        <H2Tag>{this.props.title}</H2Tag>
        <ULTag onDragOver={this.props.onDragOver} onDrop={this.props.onDrop}>
          {cards}
          <LITag>
            <AddTaskForm formNum={this.props.id} onAdd={this.props.onAdd} />
          </LITag>
        </ULTag>
      </>
    );
  }
}
