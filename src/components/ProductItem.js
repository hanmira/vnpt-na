import { useEffect } from "react";
import { createPopper } from "@popperjs/core";

function ProductItem() {
  return (
    <div className="prod-item">
      <div className="prod-img">
        <img
          src="https://i.pinimg.com/564x/76/bb/ee/76bbee09bd69fc13bb40efdb40518a92.jpg"
          alt=""
        />
        <div className="front"></div>
      </div>
      <div className="prod-item-info">
        <h1 className="prod-name">Cam</h1>
        <div className="prod-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </div>
        <div className="prod-standard">
          Dat tieu chuan:
          <div className="standard-img">
            <img
              src="https://icolor.vn/wp-content/uploads/2021/03/Logo-OCOP-c%E1%BB%A7a-Ch%C6%B0%C6%A1ng-tr%C3%ACnh-OCOP-Qu%E1%BB%91c-gia-1.jpeg"
              alt=""
            />
          </div>
          <div className="tooltip-wrapper" id="tooltip" role="tooltip">
            <div className="tooltip-img">
              <img src="https://icolor.vn/wp-content/uploads/2021/03/Logo-OCOP-c%E1%BB%A7a-Ch%C6%B0%C6%A1ng-tr%C3%ACnh-OCOP-Qu%E1%BB%91c-gia-1.jpeg" />
            </div>
            <div className="tooltip-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div id="arrow" data-popper-arrow></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
