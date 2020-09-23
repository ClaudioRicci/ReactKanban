import React from "react";
import CounterPanel from "./components/counterPanel";
import { H1Tag, H2Tag, H3Tag, PTag } from "./components/typography";
// import { Board } from "./components/board";
import Board from "./components/board/index";

const KanbanBoard = () => {
  return (
    <>
      <Board>
        <H1Tag> Hi there</H1Tag>
        <H2Tag> Hi there</H2Tag>
        <H3Tag> Hi there</H3Tag>
        <PTag>test</PTag>
        <CounterPanel />
      </Board>
    </>
  );
};

export default KanbanBoard;
