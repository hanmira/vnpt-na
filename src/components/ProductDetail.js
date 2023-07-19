import Breadcrum from "./Breadcrum";
import Carousel from "./Carousel";
import Tabs from "./Tabs";

function ProductDetail() {
  return (
    <div className="prod-detail-section container">
      <Breadcrum name={"Thong tin nong san"} />
      <div className="prod-detail-item">
        <Carousel />
        <div className="info-detail">
          <h1 className="prod-detail-name">Mit Thai</h1>
          <div className="prod-detail-info">
            <div className="prod-group-info">
              <span class="material-symbols-outlined">calendar_month</span>
              Mua vu: thang 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
            </div>
            <div className="prod-group-info">
              <span class="material-symbols-outlined">pin_drop</span>
              Xuat xu: Xa Minh Hop, Huyen Quy Hop
            </div>
            <div className="prod-group-info">
              <span class="material-symbols-outlined">scale</span>
              San luong:
            </div>
            <div>
              Dat tieu chuan:
              <div className="standard-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl6eOHtPirYLPkbkVvgqWlBfafxdmL4puPtEQucRvfAAc9ROO88GIcA91mznq-WcthWXQ&usqp=CAU"
                  alt=""
                />
              </div>
            </div>
            <div
              className="prod-copy-link"
              // onClick={document
              //   .querySelector(".copy-msg")
              //   .classList.remove("hidden")}
            >
              <span class="material-symbols-outlined">link</span> Sao chep duong
              dan
            </div>
            <span className="copy-msg">Duong dan da duoc sao chep!</span>
          </div>
        </div>
      </div>
      <Tabs />
    </div>
  );
}

export default ProductDetail;
