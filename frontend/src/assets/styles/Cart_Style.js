import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  //justify-content: space-between;
`;

export const CartItems = styled.div`
  margin: 10px;
  width: 80vw;
`;
export const SideBar = styled.div`
  min-height: 50vh;
  background-color: #eee;
  filter: drop-shadow(0 0 0.75rem #aaa);
  width: 20vw;
  margin: 10px 20px;
  button {
    position: fixed;
    bottom: 20px;
    //work on this later
    right: 20px;
    font-size: 20px;
    width: 80%;
    padding: 10px;
    background-color: #997cd6;
    border: 1px solid #aaa;
    cursor: pointer;
  }
`;
