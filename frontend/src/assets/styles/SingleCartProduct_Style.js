import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 10px;

  img {
    width: 150px;
    height: 150px;

    border-radius: 10px;
  }

  .info {
    width: 20%;
  }
  input {
    width: 30px;
    padding: 5px;
  }

  .remove {
    button {
      margin: 0;
      margin-right: 10px;
      padding: 0;
      background: none;
      border: none;
      color: #997cd6;
      font-size: 30px;
      cursor: pointer;
      transition: color 0.5s;
    }
    button:hover {
      color: #56417f;
    }
  }
`;
