import { Container, Left, Right } from "../assets/styles/Home_Style";
import pic from "../assets/images/background.jpg";
const Home = () => {
  return (
    <Container>
      <Left>
        <h1>You can find here everything for your garden.</h1>
        <p>
          We offer the highest quality garden tools, chemicals and much more
        </p>
        <button>ORDER NOW</button>
      </Left>
      <Right>
        <img src={pic} alt="pic" />
      </Right>
    </Container>
  );
};

export default Home;
