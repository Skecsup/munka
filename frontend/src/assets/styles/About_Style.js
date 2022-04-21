import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    width: 60%;
  }
  img {
    width: 60%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    margin-bottom: 20px;
  }
  table {
    border-radius: 6px 6px 0 0;
    overflow: hidden;
    border-collapse: collapse;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  table:last-child {
    margin-bottom: 20px;
  }

  th {
    background-color: #997cd6;
    padding: 5px;
    color: white;
  }
`;
