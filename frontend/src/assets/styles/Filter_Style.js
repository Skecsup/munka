import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 10rem;
  background-color: #ccc;
  flex-wrap: wrap;

  label {
    color: red;
  }
  input[type="text"] {
    border-radius: 5px;
    border: 1px solid red;
  }
  input[type="checkbox"] {
  }
`;
