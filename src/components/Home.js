import NewItem from "./NewItem";
import ProductItem from "./ProductItem";

function Home() {
  return (
    <div className="home container">
      <div className="highlight-news">
        <div className="title-wrapper">
          <h1 className="highlight-title">tin tuc moi nhat</h1>
          <button className="btn btn-more">Xem them</button>
        </div>
        <div className="item-group">
          <div className="item-wrapper-news">
            <NewItem />
            <NewItem />
            <NewItem />
            <NewItem />
          </div>
          <div className="item-wrapper-aside">
            <NewItem />
            <NewItem />
            <NewItem />
            <NewItem />
          </div>
        </div>
      </div>
      <div className="highlight-product">
        <div className="title-wrapper">
          <h1 className="highlight-title">san pham noi bat</h1>
          <button className="btn btn-more">Xem them</button>
        </div>
        <div className="item-wrapper">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
      <div className="highlight-images">
        <div className="title-wrapper">
          <h1 className="highlight-title">hinh anh - su kien</h1>
          <button className="btn btn-more">Xem them</button>
        </div>
        <div className="item-wrapper">
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
      </div>
    </div>
  );
}

export default Home;
