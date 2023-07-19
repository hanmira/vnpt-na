import Breadcrum from "./Breadcrum";
import Tabs from "./Tabs";

function FactoryDetail() {
  return (
    <div className="factory-detail-section container">
      <Breadcrum name={"thong tin doanh nghiep"} />
      <div className="factory-detail-item">
        <div className="factory-detail-img">
          <img
            src="https://i.pinimg.com/564x/2d/e6/7b/2de67b909db718c13113571312cf2569.jpg"
            alt=""
          />
        </div>
        <div className="info-detail">
          <h1 className="prod-detail-name">
            HTX sản xuât, dịch vụ nông nghiệp tổng hợp Tấn Thanh
          </h1>
          <div className="prod-detail-info">
            <div className="prod-group-info">
              <span class="material-symbols-outlined">account_circle</span>
              Người đại diện: Dương Đình Tấn
            </div>
            <div className="prod-group-info">
              <span class="material-symbols-outlined">badge</span>
              Số giấy phép: 2901890908
            </div>
            <div className="prod-group-info">
              <span class="material-symbols-outlined">call</span>
              SĐT: 0982788746
            </div>
            <div className="prod-group-info">
              <span class="material-symbols-outlined">local_post_office</span>
              Email: NongNghiepTanThanh@gmail.com
            </div>
            <div className="prod-group-info">
              <span class="material-symbols-outlined">home_pin</span>
              Địa chỉ: Xóm Dinh Phượng, xã Nghĩa Xuân, huyện Quỳ Hợp, tỉnh Nghệ
              An
            </div>
            <div className="prod-group-info text-red-500">
              <span class="material-symbols-outlined">verified</span>
              Doanh nghiệp tiêu biểu
            </div>
            <div className="prod-group-info font-semibold">Tóm tắt:</div>
          </div>
        </div>
      </div>
      <Tabs />
    </div>
  );
}

export default FactoryDetail;
