import Breadcrum from "./Breadcrum";
import NewItem from "./NewItem";
import Pagination from "./Pagination";
import Search from "./Searchbar";

function NewsList() {
  return (
    <div className="news-list-section container">
      <div className="news-list">
        <div className="news-topbar">
          <Breadcrum name={"tin tuc - su kien"} />
          <div className="news-searchbar">
            <div className="news-sorttabs">
              <button className="btn btn-tabs active-btn">Tat ca</button>
              <button className="btn btn-tabs">Tin tuc</button>
              <button className="btn btn-tabs">Su kien</button>
            </div>
            <Search />
          </div>
        </div>
        <div className="news-item-list">
          <NewItem />
          <NewItem />
          <NewItem />
          <NewItem />
        </div>
        <Pagination />
      </div>
    </div>
  );
}

export default NewsList;
