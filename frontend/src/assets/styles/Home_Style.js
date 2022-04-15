import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Left = styled.div`
  box-sizing: border-box;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  h1 {
    margin: 70px;
    color: #997cd6;
    font-size: 60px;
    text-align: left;
  }
  p {
    margin-left: 70px;
    margin-bottom: 50px;
    color: #997cd6;
  }
  button {
    font-weight: 700;
    color: #997cd6;
    margin-left: 70px;
    border: 2px solid #997cd6;
    background: none;
    padding: 20px 30px;
    cursor: pointer;
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
`;
