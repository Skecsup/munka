import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) =>
    props.status === "NEW"
      ? "#C0E3A0"
      : props.status === "PAID/SHIPPING"
      ? "#eae4f6"
      : "#FE9585"};

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  margin: 20px;
  border-radius: 10px 10px 0 0;
`;

export const Orders = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
