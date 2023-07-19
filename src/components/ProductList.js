import { useEffect } from "react";
import Breadcrum from "./Breadcrum";
import ProductItem from "./ProductItem";
import Sidebar from "./SideBar";
import { createPopper } from "@popperjs/core";
import Pagination from "./Pagination";

function ProductList() {
  useEffect(() => {
    const showEvents = ["mouseenter", "focus"];
    const hideEvents = ["mouseleave", "blur"];
    let popperInstance;
    let tooltip;
    document.querySelectorAll(".standard-img").forEach((img) => {
      // tooltip = document.querySelector(".standard-img + .tooltip-wrapper");
      tooltip = img.nextSibling;
      const element = document.body;
      popperInstance = createPopper(img, tooltip, {
        placement: "right",
        modifiers: [
          {
            name: "preventOverflow",
            options: {
              boundary: element,
            },
          },
        ],
      });
      showEvents.forEach((event) => {
        img.addEventListener(event, show);
      });
      hideEvents.forEach((event) => {
        img.addEventListener(event, hide);
      });
    });
    function show() {
      // console.log("show");
      tooltip.setAttribute("data-show", "");
      popperInstance.setOptions((options) => ({
        ...options,
        modifiers: [
          ...options.modifiers,
          { name: "eventListeners", enabled: true },
        ],
      }));
      popperInstance.update();
    }
    function hide() {
      // console.log("hide");
      tooltip.removeAttribute("data-show");
      popperInstance.setOptions((options) => ({
        ...options,
        modifiers: [
          ...options.modifiers,
          { name: "eventListeners", enabled: false },
        ],
      }));
    }
  }, []);
  return (
    <div className="product-list-section container">
      <Breadcrum name={"danh muc san pham"} />
      <div className="product-list">
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
        <div className="product-item-list-wrapper">
          <div className="product-item-list">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default ProductList;
