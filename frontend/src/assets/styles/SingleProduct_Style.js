import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin: 10px 20px;
  padding: 10px;
  background: #eae4f6;
  border-radius: 25px;
  filter: drop-shadow(0 0 0.75rem #997cd6);

  h1 {
    border-bottom: 1px solid #997cd6;
  }

  p {
    text-align: justify;
    width: 300px;
    height: 40px;
  }
  img {
    margin: 10px;
    border-radius: 25px;
    width: 300px;
    height: 300px;
  }
  strong {
    text-align: center;
    padding: 10px;
  }
  button {
    height: 30px;
    width: 90%;
    border-radius: 25px;
    background: white;
    border: 1px solid #997cd6;
    margin-bottom: 10px;
    transition: filter 0.5s;
    &:hover {
      filter: drop-shadow(0 0 0.75rem #997cd6);
    }
  }
`;
