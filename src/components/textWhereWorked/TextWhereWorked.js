import React from "react";
import { TextWork } from "../../styles/components/Main/WhereWorkedStyle";

export const TextWhereWorked = ({ company, date, position }) => {
  return (
    <TextWork>
      <div>
        <p>{company}</p>
        <p>{date}</p>
      </div>
      <p>{position}</p>
    </TextWork>
  );
};
