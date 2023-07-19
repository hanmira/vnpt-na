import Breadcrum from "./Breadcrum";
import FactoryItem from "./FactoryItem";
import Pagination from "./Pagination";
import Search from "./Searchbar";

function FactoryList() {
  return (
    <div className="factory-list-section container">
      <div className="factory-topbar">
        <Breadcrum name={"co so san xuat"} />
        <div className="factory-searchbar">
          <Search />
        </div>
      </div>
      <div className="factory-item-list">
        <FactoryItem />
        <FactoryItem />
        <FactoryItem />
        <FactoryItem />
      </div>
      <Pagination />
    </div>
  );
}

export default FactoryList;
