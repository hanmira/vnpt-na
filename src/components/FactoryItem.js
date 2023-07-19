function FactoryItem() {
  return (
    <div className="factory-item">
      <div className="factory-img">
        <img
          src="https://i.pinimg.com/564x/51/eb/13/51eb13013c3175817ef4079c49247813.jpg"
          alt=""
        />
      </div>
      <div>
        <h1 className="factory-name">
          HTX san xuat dich vu nong nghiep tong hop Tan Thanh
        </h1>
        <h2 className="factory-repre">Dai dien: Duong Dinh Tan</h2>
        <div className="factory-info">
          <div className="factory-address">
            <span class="material-symbols-outlined">location_on</span> Xom Dinh
            Phuong, xa Nghia Xuan
          </div>
          <div className="factory-phone">
            <span class="material-symbols-outlined">phone_in_talk</span>{" "}
            0982788746
          </div>
          <div className="factory-mail">
            <span class="material-symbols-outlined">mail</span>{" "}
            NongNghiepTanThanh@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}

export default FactoryItem;
