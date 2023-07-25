import Breadcrum from "./Breadcrum";
import Dropdown from "./Dropdown";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Pagination from "./Pagination";
// import "lightgallery.js/dist/css/lightgallery.css";
// import LightGallery from "lightgallery/react";
// import lgThumbnail from "lightgallery/plugins/thumbnail";
// import lgZoom from "lightgallery/plugins/zoom";
import { useEffect, useRef } from "react";

function Images() {
  const list = [
    "Tat ca",
    "Hinh anh ba con vao vu mua thu hoach",
    "Chuyen de khoa hoc",
    "Day chuyen san xuat",
  ];
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  // const galleryRef = useRef();
  // useEffect(() => {
  //   const options = {
  //     selector: ".images-item", // Class name of the gallery items
  //     plugins: [lgThumbnail, lgZoom], // Include any additional plugins you need
  //   };
  //   LightGallery(galleryRef.current, options);
  //   // Clean up the lightGallery when the component is unmounted
  //   return () => {
  //     if (galleryRef.current) {
  //       galleryRef.current.destroy();
  //     }
  //   };
  // }, []);
  return (
    <div className="images-section container">
      <Breadcrum name={"hinh anh - su kien"} />
      <div className="images-section-wrapper">
        <div className="wrapper">
          <Dropdown name={"Danh muc album"} list={list} />
        </div>
        <div className="images-list-wrapper">
          <div className="images-list">
            <div className="images-item">
              <img
                src="https://i.pinimg.com/564x/3e/1d/aa/3e1daaa540ebf0d9d14a8bc244d8f299.jpg"
                alt=""
              />
            </div>
            <div className="images-item">
              <img
                src="https://i.pinimg.com/474x/50/22/99/502299b2422423962aedda73d1e597cc.jpg"
                alt=""
              />
            </div>
            <div className="images-item">
              <img
                src="https://i.pinimg.com/474x/c8/f4/77/c8f4771b94f1e700eb18088901c18a98.jpg"
                alt=""
              />
            </div>
            <div className="images-item">
              <img
                src="https://i.pinimg.com/564x/7d/0c/25/7d0c2577fd0f1c487a60f42f998f74b2.jpg"
                alt=""
              />
            </div>
            <div className="images-item">
              <img
                src="https://i.pinimg.com/564x/1e/88/56/1e8856eb0a225dd77921daf4e055a18b.jpg"
                alt=""
              />
            </div>
            <div className="images-item">
              <iframe
                src="https://www.youtube.com/embed/ANsQzuBNqE8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>

          <Pagination />
        </div>
      </div>
      <div className="img-gallery">
        <ImageGallery items={images} />
      </div>
    </div>
  );
}

export default Images;
