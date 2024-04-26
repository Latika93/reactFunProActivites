import Accordion from "./Components/Accordion/Accordion";
import ColorGenerator from "./Components/ColorGenerator/ColorGenerator";
import LoadMore from "./Components/LoadMore.jsx/LoadMore";
import ImageSlider from "./Components/ImageSlider/ImageSlider";
import Star from "./Star/Star";
import Images from "./constants/images";

function App() {
  return (
    <div className="">
      <Accordion />
      <ColorGenerator />
      <Star />
      <ImageSlider images={Images} />

      <LoadMore />

    </div>
  );
}

export default App;
