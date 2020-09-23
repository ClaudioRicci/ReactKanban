import React from "react";
import TaskCard from "../taskcard";
import AddTaskForm from "./../addtaskform";
import "./styles/list.css";
import { H2Tag } from "../typography";

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
    const cards = this.props.cards.map((card: any, index: number) => {
      return (
        <li key={index}>
          <TaskCard {...card} onDragStart={this.props.onDragStart} />
        </li>
      );
    });

    return (
      <div>
        <H2Tag>{this.props.title}</H2Tag>
        <ul
          className="list"
          onDragOver={this.props.onDragOver}
          onDrop={this.props.onDrop}
        >
          {cards}
          <li className="add-list-wrapper">
            <AddTaskForm formNum={this.props.id} onAdd={this.props.onAdd} />
          </li>
        </ul>
      </div>
    );
  }
}
