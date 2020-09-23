import React from "react";
import { H1Tag, H2Tag, H3Tag } from "./components/typography";
import Board from "./components/board";

const KanbanBoard = () => {
  return (
    <>
      <Board>
        <H1Tag> Hi there</H1Tag>
        <H2Tag> Hi there</H2Tag>
        <H3Tag> Hi there</H3Tag>
      </Board>
    </>
  );
};

export default KanbanBoard;
