import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.step === 4 ? "column" : "row")};
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CartItems = styled.div`
  width: 70vw;
  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export const SideBar = styled.div`
  height: fit-content;
  background-color: #eee;
  filter: drop-shadow(0 0 0.75rem #aaa);
  width: 30vw;
  margin: 10px 20px;

  span {
    color: #997cd6;
    cursor: pointer;
  }

  button {
    font-size: 20px;
    width: 80%;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #997cd6;
    border: none;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    transition: background-color 0.5s;
    &:hover {
      background-color: #56417f;
    }
  }
  @media (max-width: 768px) {
    width: calc(100vw - 40px);
  }
`;
