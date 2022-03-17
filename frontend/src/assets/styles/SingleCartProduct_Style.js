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

  .count {
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      opacity: 1;
    }
  }
  .remove {
    button {
      margin: 0;
      padding: 0;
      background: none;
      border: none;
      color: purple;
      font-size: 30px;
    }
    button:hover {
      color: red;
    }
  }
`;
