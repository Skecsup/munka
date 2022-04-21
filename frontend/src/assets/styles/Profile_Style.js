import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
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
    text-align: center;
    box-sizing: border-box;
    min-width: 250px;
    width: 100%;
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
  }
`;

export const Left = styled.div`
  width: 40vw;
  margin: 50px;
  @media (max-width: 768px) {
    margin: 0;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const Right = styled.div`
  margin: 50px;
  width: 50vw;

  @media (max-width: 768px) {
    margin: 0;
    width: 100vw;
  }
`;
