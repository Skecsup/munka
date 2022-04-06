import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) =>
    props.status === "NEW"
      ? "green"
      : props.status === "PAID/SHIPPING"
      ? "yellow"
      : "red"};
`;
