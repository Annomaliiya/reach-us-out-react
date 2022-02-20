import "./App.css";
import BackgroundImages from "./components/BackgroundImages";
import MainPage from "./pages/MainPage";
import Container from "./components/Container";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <BackgroundImages>
      <Container>
        <MainPage />
      </Container>
      <Footer>
        <SocialLinks></SocialLinks>
      </Footer>
    </BackgroundImages>
  );
}

export default App;
