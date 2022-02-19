import "./App.css";
import styled from "styled-components";
import MainPage from "./pages/MainPage";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Map from "./images/map.png";
import Clouds from "./images/cloud.png";
import Circle from "./images/circle.png";
import LeftCircle from "./images/left-top.png";
import Goodie from "./images/goodie.png";
import GoodieBig from "./images/goodie-big.png";
import Group from "./images/group.png";
import Map768 from "./images/map768.png";

const Background = styled.div`
  @media screen and (max-width: 767px) {
    background-color: #fab9d9;
  }
  @media screen and (min-width: 768px) {
    background-image: url(${Group}), url(${Map768}), url(${Clouds});
    background-repeat: no-repeat;
    background-position: 50% 70%, right top, left 65%;
  }
  @media screen and (min-width: 1100px) {
    background-image: url(${Circle}), url(${LeftCircle}), url(${Goodie}),
      url(${GoodieBig}), url(${Map}), url(${Clouds});
    background-repeat: no-repeat;
    background-position: 750px 21px, 22px 29px, 60% 515px, 65% 540px, right top,
      left 101px;
  }
`;
function App() {
  return (
    <Background>
      <Container>
        <MainPage />
      </Container>
      <Footer />
    </Background>
  );
}

export default App;
