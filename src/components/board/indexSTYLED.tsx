import React, { Component } from "react";
import styled from "styled-components";
import { colors, fonts, align } from "../../themeVariables";
// import "./Board.css";
// import List from './List';

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

interface IBoardProps {}

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
      this.state = {
        lists: [
          {
            title: "Derrick",
            id: 0,
            cards: [
              {
                taskTitle: "default task card 1",
                listNumber: 0,
                timeId: 0
              },
              {
                taskTitle: "default task card 2",
                listNumber: 0,
                timeId: 1
              }
            ]
          },
          {
            title: "Maxwell",
            id: 1,
            cards: [
              {
                taskTitle: "default task card 1",
                listNumber: 1,
                timeId: 2
              },
              {
                taskTitle: "default task card 2",
                listNumber: 1,
                timeId: 3
              }
            ]
          },
          {
            title: "Zaza",
            id: 2,
            cards: [
              {
                taskTitle: "default task card 1",
                listNumber: 2,
                timeId: 4
              },
              {
                taskTitle: "default task card 2",
                listNumber: 2,
                timeId: 5
              }
            ]
          },
          {
            title: "Sam",
            id: 3,
            cards: [
              {
                taskTitle: "default task card 1",
                listNumber: 3,
                timeId: 6
              },
              {
                taskTitle: "default task card 2",
                listNumber: 3,
                timeId: 7
              }
            ]
          }
        ]
      };
      //sync localStorage to state
      localStorage.setItem("lists", JSON.stringify(this.state.lists));
    }
  }
}
