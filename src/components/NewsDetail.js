import Breadcrum from "./Breadcrum";
import BreadcrumItem from "../components/BreadcrumItem";

function NewsDetail() {
  return (
    <div className="news-detail-section container">
      <div className="breadcrum-group">
        <Breadcrum name={`Tin tuc - su kien `} />
        <BreadcrumItem name={"ban tin"} />
      </div>
      <div className="news-wrapper">
        <div className="main-article">
          <div className="article-img">
            <img
              src="https://i.pinimg.com/564x/87/ea/1d/87ea1d48163359d47da7d8da47aa78e7.jpg"
              alt=""
            />
          </div>
          <h1 className="article-title">
            Quỳ Hợp tham quan mô hình trồng cây hương bài và đào tạo nghề làm
            hương tại Thanh Chương
          </h1>
          <div className="article-info">
            <div className="news-time">
              <span class="material-symbols-outlined">schedule</span>12/05/2023
            </div>
            <div className="news-view">
              <span class="material-symbols-outlined">visibility</span>45
            </div>
          </div>
          <h5 className="article-subtitle">
            Thực hiện kế hoạch của “Dự án xây dựng mô hình trồng cây hương bài
            và đào tạo nghề làm hương ở xã Châu Cường”, Trung tâm khuyến viên và
            dịch vụ nghề vườn Việt Nam vừa tổ chức cho cán bộ các phòng ban
            chuyên môn huyện Quỳ Hợp và cán bộ đảng ủy, chính quyền xã Châu
            Cường tham quan mô hình trồng và sản xuất cây hương bài tại huyện
            Thanh Chương.
          </h5>
          <div className="article-img">
            <img
              src="https://i.pinimg.com/564x/9c/09/7d/9c097d9d1eed5c0ac5f4618c73fd29fd.jpg"
              alt=""
            />
          </div>
          <p className="article-desc">
            Anh Trần Công Quý (ở giữa) giới thiệu với cán bộ các phòng ban
            chuyên môn huyện Quỳ Hợp và cán bộ đảng ủy, chính quyền xã Châu
            Cường về hiệu quả từ mô hình trồng và sản xuất cây hương bài tại
            huyện Thanh Chương Mục đích của chuyến tham quan là học hỏi thành
            công từ các mô hình về việc trồng cây hương bài và đào tạo nghề làm
            hương ở huyện Thanh Chương. Áp dụng các bài học kinh nghiệm tiếp thu
            được từ chuyến tham quan học tập vào hoạt động sản xuất, nâng cao
            thu nhập ngay tại địa phương. Hy vọng sau chuyến thăm quan học tập
            này, các cán bộ xã, bản và người dân xã Châu Cường nói riêng và bà
            con các xã miền núi ở Qùy Hợp sẽ tìm ra hướng đi mới để phát triển
            kinh tế địa phương, từng bước xóa đói, giảm nghèo bền vững.
          </p>
          <div className="article-author">Phan Phan</div>
          <div className="article-link">
            Trích dẫn:
            <a href="https://quyhop.nghean.gov.vn/doanh-nghiep/quy-hop-tham-quan-mo-hinh-trong-cay-huong-bai-va-dao-tao-n">
              https://quyhop.nghean.gov.vn/doanh-nghiep/quy-hop-tham-quan-mo-hinh-trong-cay-huong-bai-va-dao-tao-n
            </a>
          </div>
          <div className="article-tags">
            Tu khoa: <span className="tag">cay huong bai</span>{" "}
            <span className="tag">dao tao nghe lam huong</span>
          </div>
        </div>
        <div className="related-article">
          <h1 className="related-article-title">bai viet lien quan</h1>
        </div>
      </div>
    </div>
  );
}

export default NewsDetail;
