import { Container, Left, Right } from "../assets/styles/Home_Style";
import { useNavigate } from "react-router-dom";
import pic from "../assets/images/background.jpg";
const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Left>
        <h1>You can find here everything for your garden.</h1>
        <p>
          We offer the highest quality garden tools, chemicals and much more
        </p>
        <button onClick={() => navigate("/shop")}>ORDER NOW</button>
      </Left>
      <Right>
        <img src={pic} alt="pic" />
      </Right>
    </Container>
  );
};

export default Home;
