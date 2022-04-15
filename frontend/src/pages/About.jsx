import { Container } from "../assets/styles/About_Style";
import pic from "../assets/images/background.jpg";
const About = () => {
  return (
    <Container>
      <h1>About us</h1>
      <p>
        We are a family company operating on the market since 1995 in
        Želiezovce. We sell gardening tools, chemicals and everything you should
        need for your garden. Our store strives to offer our customers quality
        goods at low prices. <strong> Wisterias</strong>'s goal is customer
        satisfaction, so we look forward to meeting you in our store. We have
        created an E-shop for you since 2020.
      </p>
      <img src={pic} alt="pic" />
    </Container>
  );
};

export default About;
