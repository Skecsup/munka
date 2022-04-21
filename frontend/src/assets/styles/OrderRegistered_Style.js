import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    padding: 5px;
    background-color: #c0e3a0;
    color: green;
    border-radius: 20px;
    width: 50%;
  }
  h4,
  strong {
    box-sizing: border-box;
    padding: 2%;
  }

  .crypto {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    padding-bottom: 5px;
    margin-bottom: 20px;
    border-bottom: 1px solid black;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    @media (max-width: 420px) {
      strong {
        font-size: small;
      }
    }
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  button {
    font-size: 20px;
    width: 200px;
    padding: 10px;
    margin: 10px 0;
    background-color: white;
    border: 2px solid #997cd6;
    border-radius: 10px;
    color: #997cd6;
    cursor: pointer;
    transition: background-color 0.5s, color 0.5s;
    &:hover {
      background-color: #997cd6;
      color: white;
    }
  }
`;
