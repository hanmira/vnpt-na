function Login() {
  return (
    <div className="login-section ">
      <button className="btn btn-back">
        <span class="material-symbols-outlined">arrow_back</span> &nbsp;{" "}
        <a href="/">Quay lai trang chu</a>
      </button>
      <div className="section-cover">
        <div className="login-img">
          <div className="img-wrapper">
            <img
              src="https://graphicsfamily.com/wp-content/uploads/edd/2020/11/Clean-Farm-Agriculture-Logo-Template-PNG-Transparent.png"
              alt=""
            />
          </div>
          <div className="img-title">lorem ipsum</div>
        </div>
        <div className="login-form">
          <h1 className="form-title">dang nhap tai khoan</h1>
          <label>Tai khoan</label>
          <input placeholder="Nhap ten tai khoan"></input>
          <label>Mat khau</label>
          <input placeholder="Nhap mat khau"></input>
          <button className="btn btn-login">Dang nhap</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
