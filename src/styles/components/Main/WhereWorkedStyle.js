import styled from "styled-components";
// import { Device } from "../../Breakpoints";

export const WorkedContainer = styled.section`
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-rows: repeat(2, 125px);
  grid-template-columns: 130px 250px;
`;

export const RoundedWork = styled.div.attrs((props) => ({
  width: props.width || "",
}))`
  width: 80px;
  background: #e9d9d9;
  border-radius: 55%;
  height: 80px;
  position: relative;
  &:after {
    background: #e9d9d9;
    content: "";
    height: 3px;
    left: 100%;
    position: absolute;
    top: 50%;
    width: 50px;
  }
  &:before {
    transform: rotate(90deg);
    background: #e9d9d9;
    content: "";
    height: 3px;
    left: 20%;
    position: absolute;
    top: -30%;
    width: ${(props) => props.width};
  }
`;

export const TextWork = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e9d9d9;
  box-shadow: 7px 6px 30px 0px rgb(0 0 0 / 75%);
  border-radius: 4px;
  & > div {
    display: flex;
    column-gap: 10px;
  }
`;
