import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import "./image-slider2.css";

type ImageSliderProps = {
  imageUrls: string[];
};

export function ImageSlider({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  }

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {imageUrls.map((url) => (
          <img
            key={url}
            src={url}
            alt="cars"
            className="img-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>

      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
      >
        <ArrowBigLeft />
      </button>

      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
      >
        <ArrowBigRight />
      </button>
      <div>
        {imageUrls.map((_, index) => (
          <button onClick={() => setImageIndex(index)}>{index}</button>
        ))}
      </div>
    </div>
  );
}
