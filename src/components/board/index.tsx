// import React, { Component } from "react";
// import styled from "styled-components";
// import { colors, fonts, align } from "../../themeVariables";
// import "./styles/board.css";
// import List from "./../list";
// import TaskCard from "../taskcard";
// import defaultTasks from "./tasks";

// const StyledContainer = styled.div`
//   background: ${colors.white};
//   border: 0.4rem ${colors.black} solid;
//   color: ${colors.primary};
//   font: 900 1em/2rem ${fonts.header};
//   padding: 1rem;
//   text-align: ${align.center};
// `;

// export const Board = (props: any) => {
//   return <StyledContainer>{props.children}</StyledContainer>;
// };

// interface IBoardState {
//   lists: any;
// }

// export default class Board extends Component<{}, IBoardState> {
//   constructor(props: any) {
//     super(props);
//     //if there's a localStorage to be had grab it otherwise set state
//     if (localStorage.getItem("lists")) {
//       const rawLS: any = localStorage.getItem("lists");
//       const parsedLS = JSON.parse(rawLS);
//       this.state = { lists: parsedLS };
//     } else {
//       this.state = defaultTasks;
//       localStorage.setItem("lists", JSON.stringify(this.state.lists));
//     }
//   }

//   //get id of item being dragged and list where it's coming from
//   onDragStart = (e: any, fromList: any) => {
//     const dragInfo = {
//       taskId: e.currentTarget.id,
//       fromList: fromList
//     };

//     localStorage.setItem("dragInfo", JSON.stringify(dragInfo));
//   };

//   onDragOver = (e: any) => {
//     e.preventDefault();
//   };

//   onDrop = (e: any, listNumber: any) => {
//     //get the dropped task card, the localStorage,
//     const droppedTask: any = localStorage.getItem("dragInfo");
//     const rawLS: any = localStorage.getItem("lists");
//     const parsedLS: any = JSON.parse(rawLS);
//     const parsedDragInfo = JSON.parse(droppedTask);

//     //get task cards array, get rid of moved card, and put a new card
//     // in the list where it was dropped
//     const cardsArray = parsedLS[parsedDragInfo.fromList].cards;
//     const taskCard = cardsArray.find(
//       (card: any) => card.timeId === parsedDragInfo.taskId
//     );
//     const indexOfCard = cardsArray.findIndex(
//       (card: any) => card.timeId === parsedDragInfo.taskId
//     );
//     parsedLS[parsedDragInfo.fromList].cards.splice(indexOfCard, 1);
//     parsedLS[listNumber].cards.push({
//       ...taskCard,
//       taskNumber: parseInt(listNumber)
//     });

//     //sync the state and localStorage
//     this.setState({
//       lists: parsedLS
//     });
//     localStorage.setItem("lists", JSON.stringify(parsedLS));
//   };

//   //add some new task cards
//   addTaskCard = (
//     taskTitle: string,
//     taskDescription: string,
//     taskComment: string,
//     taskNumber: number,
//     timeId: any
//   ) => {
//     const rawLS: any = localStorage.getItem("lists");
//     const parsedLS: any = JSON.parse(rawLS);

//     const newTask = {
//       taskTitle,
//       taskDescription,
//       taskComment,
//       taskNumber,
//       timeId: new Date().valueOf()
//     };

//     parsedLS[taskNumber].cards.push(newTask);

//     //sync state and localStorage
//     this.setState({
//       lists: parsedLS
//     });
//     localStorage.setItem("lists", JSON.stringify(parsedLS));
//   };

//   render() {
//     const lists = this.state.lists.map((list: any, index: number) => (
//       <li className="list-wrapper" key={index}>
//         <List
//           {...list}
//           onAdd={(
//             taskTitle: string,
//             taskDescription: string,
//             taskComment: string,
//             taskNumber: number,
//             timeId: any
//           ) =>
//             this.addTaskCard(
//               taskTitle,
//               taskDescription,
//               taskComment,
//               taskNumber,
//               timeId
//             )
//           }
//           onDragStart={(e: any, fromList: any) =>
//             this.onDragStart(e, `${list.id}`)
//           }
//           onDragOver={(e: any) => this.onDragOver(e)}
//           onDrop={(e: any, taskNumber: number) => {
//             this.onDrop(e, `${list.id}`);
//           }}
//         />
//       </li>
//     ));

//     return (
//       <div className="board">
//         <ul className="lists">{lists}</ul>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import "./styles/board.css";
import List from "../list";
import defaultTasks from "./tasks";

interface IBoardState {
  lists: any;
}

export default class Board extends Component<{}, IBoardState> {
  constructor(props: any) {
    super(props);
    //if there's a localStorage to be had grab it otherwise set state
    if (localStorage.getItem("lists")) {
      const rawLS: any = localStorage.getItem("lists");
      const parsedLS = JSON.parse(rawLS);
      this.state = { lists: parsedLS };
    } else {
      this.state = defaultTasks;
      localStorage.setItem("lists", JSON.stringify(this.state.lists));
    }
  }

  //get id of item being dragged and list where it's coming from
  onDragStart = (e: any, fromList: any) => {
    console.log(`what a drag!`);
    const dragInfo = {
      taskId: e.currentTarget.id,
      fromList: fromList
    };

    localStorage.setItem("dragInfo", JSON.stringify(dragInfo));
  };

  onDragOver = (e: any) => {
    e.preventDefault();
  };

  onDrop = (e: any, listNum: any) => {
    //get the dropped task card, the localStorage,
    const droppedTask: any = localStorage.getItem("dragInfo");
    const rawLS: any = localStorage.getItem("lists");
    const parsedLS = JSON.parse(rawLS);
    const parsedDragInfo = JSON.parse(droppedTask);

    //get task cards array, get rid of moved card, and put a new card
    // in the list where it was dropped
    const cardsArray = parsedLS[parsedDragInfo.fromList].cards;
    const taskCard = cardsArray.find(
      (card: any) => card.timeId == parsedDragInfo.taskId
    );
    const indexOfCard = cardsArray.findIndex(
      (card: any) => card.timeId == parsedDragInfo.taskId
    );
    parsedLS[parsedDragInfo.fromList].cards.splice(indexOfCard, 1);
    parsedLS[listNum].cards.push({
      ...taskCard,
      listNumber: parseInt(listNum)
    });

    //sync the state and localStorage
    this.setState({
      lists: parsedLS
    });
    localStorage.setItem("lists", JSON.stringify(parsedLS));
  };

  //add some new task cards
  addTaskCard(taskText: string, listNumber: number) {
    const rawLS: any = localStorage.getItem("lists");
    const parsedLS = JSON.parse(rawLS);

    const newTask = {
      taskText,
      listNumber,
      timeId: new Date().valueOf()
    };

    parsedLS[listNumber].cards.push(newTask);

    //sync state and localStorage
    this.setState({
      lists: parsedLS
    });
    localStorage.setItem("lists", JSON.stringify(parsedLS));
  }

  render() {
    const lists = this.state.lists.map((list: any, index: number) => (
      <li className="list-wrapper" key={index}>
        <List
          {...list}
          onAdd={(taskText: string, listNumber: number) =>
            this.addTaskCard(taskText, listNumber)
          }
          onDragStart={(e: any, fromList: any) =>
            this.onDragStart(e, `${list.id}`)
          }
          onDragOver={(e: any) => this.onDragOver(e)}
          onDrop={(e: any, listNum: any) => {
            this.onDrop(e, `${list.id}`);
          }}
        />
      </li>
    ));

    return (
      <div className="board">
        <ul className="lists">{lists}</ul>
      </div>
    );
  }
}
