import { useEffect } from "react";
import Search from "./Searchbar";
import Dropdown from "./Dropdown";
import Slidebar from "./Sliderbar";

function Sidebar() {
  const xuatxu = ["Tat ca", "Xa Yen Hop", "Xa Dong Hop"];
  const loai = ["Cam", "Vai", "Nhan", "Mit", "Tao", "Thanh long"];
  return (
    <div className="sidebar">
      <Search />
      <div className="radio-group">
        <input type="radio" value="" />
        <label>Nong san dia phuong</label>
      </div>
      <div className="radio-group">
        <input type="radio" value="" />
        <label>San pham thuong hieu</label>
      </div>

      <Dropdown data-toggle={1} list={xuatxu} name="Xuat xu" />
      <Dropdown data-toggle={2} list={loai} name="Loai san pham" />
      <Slidebar />
    </div>
  );
}

export default Sidebar;
