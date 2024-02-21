import "./App.css";
import Car_1 from "./assets/car-1.jpg";
import Car_2 from "./assets/car-2.jpg";
import Car_3 from "./assets/car-3.jpg";
import Car_4 from "./assets/car-4.jpg";
import Car_5 from "./assets/car-5.jpg";
import { ImageSlider } from "./ImageSlider";

const IMAGES = [Car_1, Car_2, Car_3, Car_4, Car_5];

export default function App() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        height: "500px",
        margin: "0 auto",
      }}
    >
      <ImageSlider imageUrls={IMAGES} />
    </div>
  );
}
