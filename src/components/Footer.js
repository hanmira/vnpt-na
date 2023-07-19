function Footer() {
  return (
    <footer>
      <div className="qr">
        <a className="mobile-link" href="">
          <span class="material-symbols-outlined">smartphone</span>Ung dung
          mobile
        </a>
        <div className="qr-img">
          <img
            src="https://i.pinimg.com/564x/d8/11/10/d81110f74b45542aa26eddc290592ed8.jpg"
            alt="QR Code"
          />
        </div>
      </div>
      {/* /////////// */}
      <div className="contact">
        <h1 className="title">nong thon moi huyen quy hop</h1>
        <ul>
          <li>Hotline: 0969 092 712</li>
          <li>Email: quyhop_province@mimex.vn</li>
          <li>Địa chỉ: Huyện Quỳ Hợp, tỉnh Nghệ An</li>
        </ul>
      </div>
      {/* /////////////////////// */}
      <div className="info">
        <h1 className="title">thong tin</h1>
        <ul>
          <li>
            <a className="footer-link" href="">
              Danh muc tin tuc
            </a>
          </li>
          <li>
            <a className="footer-link" href="">
              Danh muc nong san
            </a>
          </li>
          <li>
            <a className="footer-link" href="">
              Co so san xuat, kinh doanh
            </a>
          </li>
        </ul>
      </div>
      {/* ///////////////////////////// */}
      <div className="support">
        <h1 className="title">ho tro</h1>
        <ul>
          <li>
            <a className="footer-link" href="">
              Hinh anh su kien
            </a>
          </li>
          <li>
            <a className="footer-link" href="">
              Thong tin lien he
            </a>
          </li>
          <li>
            <a className="footer-link" href="">
              Nguoi tieu dung
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
