import styled from "styled-components";

export const Main = styled.div`
  margin: 15px auto;
  line-height: 1.15;
  word-break: break-word;
  display: grid;
  grid-gap: 10px;
  max-width: 1000px;
  padding: 30px;

  @media screen and (max-width: 550px) {
    padding: 15px;
  }
`;