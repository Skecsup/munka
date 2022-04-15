import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 100px;
  background-color: #eee;
  margin-bottom: 10px;

  label {
    color: #997cd6;
  }
  input[type="text"] {
    border-radius: 5px;
    border: 1px solid #997cd6;
  }
  input[type="range"] {
    color: #997cd6;
  }
`;
