import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1370px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  box-sizing: border-box;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  h1 {
    margin: 5%;
    color: #997cd6;
    font-size: 60px;
    text-align: left;
  }
  p {
    margin: 5%;
    margin-bottom: 50px;
    color: #997cd6;
  }
  button {
    font-weight: 700;
    color: #997cd6;
    margin-left: 5%;
    border: 2px solid #997cd6;
    background: none;
    padding: 20px 30px;
    cursor: pointer;
    transition: background-color 0.5s, color 0.5s;
    &:hover {
      background-color: #997cd6;
      color: white;
    }
  }
  @media (max-width: 1370px) {
    width: 100vw;
    margin-bottom: 20px;
  }
`;
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: calc(100vh - 100px);

  img {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  @media (max-width: 1370px) {
    width: 100vw;
  }
`;
