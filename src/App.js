import Accordion from "./Accordion/Accordion";
import ColorGenerator from "./ColorGenerator/ColorGenerator";
import ImageSlider from "./ImageSlider/ImageSlider";
import Star from "./Star/Star";
import Images from "./constants/images";

function App() {
  return (
    <div className="">
      <Accordion />
      <ColorGenerator />
      <Star />
      <ImageSlider images={Images} />
    </div>
  );
}

export default App;
