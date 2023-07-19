import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactPanZoom from "react-image-pan-zoom-rotate";
import Slider from "react-slick";
import { useState } from "react";
function ImageGallery() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const images = [
    "https://i.pinimg.com/564x/76/bb/ee/76bbee09bd69fc13bb40efdb40518a92.jpg",
    "https://i.pinimg.com/564x/7c/3b/a8/7c3ba8b274f744dd746516dc6e0be322.jpg",
    "https://i.pinimg.com/564x/a2/8f/12/a28f12152427b6461298c3aeae293508.jpg",
    "https://i.pinimg.com/564x/ca/be/9b/cabe9bf49afb006b3e07ee240e70277a.jpg",
    "https://i.pinimg.com/564x/1d/b0/95/1db095f9c7563ef0e15b0ad179b7a8c4.jpg",
    "https://i.pinimg.com/564x/1d/b0/95/1db095f9c7563ef0e15b0ad179b7a8c4.jpg",
    "https://i.pinimg.com/564x/78/15/7e/78157eca55f69f36fd456aafe1eb7d8b.jpg",
  ];
  return (
    <div className="carousel2">
      <Slider
        asNavFor={nav2}
        ref={(slider1) => setNav1(slider1)}
        slidesToScroll={1}
        autoplay={false}
        autoplaySpeed={3000}
        arrows={true}
      >
        {images.map((img) => (
          <div className="slide-img-large2">
            <ReactPanZoom image={img} />
          </div>
        ))}
      </Slider>
      <div className="nested-carousel2">
        <Slider
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
          autoplay={false}
          autoplaySpeed={3000}
          arrows={false}
        >
          {images.map((img) => (
            <div className="slide-img2">
              <img src={img} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ImageGallery;
