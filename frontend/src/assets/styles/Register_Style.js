import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5vh;
    padding: 40px 60px;
    width: fit-content;

    border-radius: 100px;
    background-color: #eae4f6;
    filter: drop-shadow(0 0 0.75rem #997cd6);
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    div {
      max-width: fit-content;
    }
  }
  label {
    color: #56417f;
    font-weight: 500;
    display: block;
    text-transform: capitalize;
  }
  input {
    padding: 10px 10px;
    border-radius: 0.25rem;
    background: #f0f4f8;
    border: 1px solid #bcccdc;
    height: 10px;
  }
  img {
    width: 100px;
    height: auto;
    filter: drop-shadow(0 0 0.75rem #997cd6);
  }
  h3 {
    font-size: 35px;
    color: #56417f;
    font-weight: 100;

    margin: 15px;
  }
  .submit {
    width: 100%;
    color: #56417f;
    border: 1px solid #56417f;
    background-color: white;
    font-size: 20px;
    padding: 8px 12px;
    border-radius: 25px;
    margin-top: 15px;
    cursor: pointer;
    transition: background-color 0.5s, color 0.5s;
    &:hover {
      background-color: #56417f;
      color: white;
    }
  }
  .change {
    border: none;
    background: none;
    text-decoration: underline;
    font-weight: 900;
    cursor: pointer;
    transition: color 0.5s;
    &:hover {
      color: #997cd6;
    }
  }
  p,
  .change {
    color: #56417f;
  }
`;
