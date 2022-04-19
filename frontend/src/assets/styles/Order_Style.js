import styled from "styled-components";

export const Container = styled.div`
  background-color: #eee;
  filter: drop-shadow(0 0 0.75rem #aaa);
  width: 80vw;
  margin: 10px 20px;
  color: #56417f;

  button {
    border: none;
    background: none;
    text-decoration: underline;
    cursor: pointer;
    color: #997cd6;
  }

  table {
    border-radius: 6px;
    overflow: hidden;
    border-collapse: collapse;
    width: 80%;
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

  @media (max-width: 768px) {
    width: calc(100vw - 40px);
  }
`;

export const Items = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  cursor: pointer;
  div {
    background-color: #fff;
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
  }
`;
