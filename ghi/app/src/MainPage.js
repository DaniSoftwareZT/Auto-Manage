import "./index.css";
import Carousel from "./components/Carousel";
import BulletPoints from "./components/BulletPoints";
import Features from "./components/Features";
import Footer from "./components/Footer";

function MainPage() {
  return (
    <>
      <Carousel />
      <BulletPoints />
      <Features />
      <Footer />
    </>
  );
}

export default MainPage;
