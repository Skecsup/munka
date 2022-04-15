import styled from "styled-components";

export const Container = styled.div`
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  filter: drop-shadow(0 0 0.75rem #aaa);
  width: 80vw;
  margin: 10px 20px;

  h1 {
    color: #997cd6;
  }

  label {
    display: block;
    text-transform: capitalize;
    color: #56417f;
    font-weight: 500;
  }
  input {
    box-sizing: border-box;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border-radius: 0.25rem;
    background: #f0f4f8;
    border: 1px solid #bcccdc;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
