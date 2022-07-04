import React from "react";
import {
  RoundedWork,
  WorkedContainer,
} from "../styles/components/Main/WhereWorkedStyle";
import { TextWhereWorked } from "./textWhereWorked/TextWhereWorked";

export const WhereWorked = () => {
  return (
    <WorkedContainer>
      <RoundedWork></RoundedWork>
      <TextWhereWorked
        company="Moby Digital"
        date="2022-04/Actualidad"
        position="Front-End Jr"
      />
    </WorkedContainer>
  );
};
