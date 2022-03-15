import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  background-color: #eae4f6;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  filter: drop-shadow(0 0 5px #aaa);

  img {
    width: 80px;
    height: 80px;
    padding: 10px;
  }

  .nav-link {
    margin: 10px;
    display: flex;
    font-size: 1.5rem;
    font-weight: 100;
    color: #997cd6;
    text-transform: capitalize;
    text-decoration: none !important;

    &:hover {
      color: #56417f;
    }
  }
  .register {
    color: white !important;
    background-color: #997cd6;
    border: 1px solid #997cd6;
    padding: 10px 50px;
    border-radius: 30px;
    &:hover {
      background-color: #56417f;
    }
  }
  .hamburger {
    color: #997cd6;
    flex-direction: column;
    cursor: pointer;
    align-items: center;
    display: none;
    margin: 20px;
    font-size: 1.5rem;
    @media (max-width: 768px) {
      display: flex;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${(props) => (props.isOpen ? "300px" : "0")};
    transition: max-height 0.4s ease-in-out;
  }
`;