import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) =>
    props.status === "NEW"
      ? "#C0E3A0"
      : props.status === "PAID/SHIPPING"
      ? "#eae4f6"
      : "#FE9585"};

  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 20px;
  border-radius: 10px 10px 0 0;
`;

export const Orders = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ProductCreator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    display: block;
    text-transform: capitalize;
    color: #56417f;
    font-weight: 500;
  }
  input {
    text-align: center;
    box-sizing: border-box;
    min-width: 250px;
    width: 30%;
    margin: 10px 0;
    padding: 10px;
    border-radius: 0.25rem;
    background: #f0f4f8;
    border: 1px solid #bcccdc;
  }
  button {
    font-weight: 700;
    color: #997cd6;
    margin-bottom: 20px;
    border: 2px solid #997cd6;
    background: none;
    padding: 20px 30px;
    cursor: pointer;
    width: 200px;
    border-radius: 10px;
    transition: background-color 0.5s, color 0.5s;
    &:hover {
      background-color: #997cd6;
      color: white;
    }
  }
`;
