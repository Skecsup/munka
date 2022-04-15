import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  .icon {
    font-size: 50px;
  }
`;

export const Payment = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: column;
  div {
    padding: 10px;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
  }
  label {
    display: inline;
    font-size: 50px;
    margin: 10px;
  }

  input {
    display: inline;
    width: 50px;
    height: 50px;
    margin: 30px;
  }
`;
export const Shipping = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: column;

  div {
    padding: 10px;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    background-color: #eee;
  }
  label {
    display: inline;
    font-size: 50px;
  }
  input {
    display: inline;
    width: 50px;
    height: 50px;
    margin: 30px;
  }
`;
