import { useContext, useEffect } from "react";
import Search from "./Searchbar";
import NavContext from "./NavContext";
import { NavLink } from "react-router-dom";

function Navbar() {
  // const { activeNavItem, setActiveNavItem } = useContext(NavContext);
  // const handleNavItemClick = (item) => {
  //   setActiveNavItem(item);
  // };
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (document.querySelector(".home")) {
      document
        .querySelector(".nav-list")
        .classList.add("bg-white", "text-black");
      window.onscroll = function () {
        if (
          document.body.scrollTop >= 50 ||
          document.documentElement.scrollTop >= 50
        ) {
          if (navbar) {
            navbar.classList.add("bg-white");
            navbar.classList.remove("bg-transparent");
            navbar.classList.add("shadow-md");
            navbar.classList.remove("p-5");
            navbar.classList.add("text-black");
            navbar.classList.add("px-5", "py-2");
          }
        } else {
          if (navbar) {
            navbar.classList.add("bg-transparent");
            navbar.classList.remove("bg-white");
            navbar.classList.remove("shadow-md");
            navbar.classList.remove("px-5", "py-2");
            navbar.classList.add("p-5");
            navbar.classList.remove("text-black");
          }
        }
      };
    }

    if (document.querySelector(".navbar")) {
      if (document.querySelector(".menu-icon")) {
        document.addEventListener("click", (e) => {
          // console.log(e.target.closest("div"));
          if (
            e.target.closest("div") === document.querySelector(".menu-icon")
          ) {
            document.querySelector(".nav-list").style.right = "0";
          } else {
            document.querySelector(".nav-list").style.right = "-100%";
          }
        });
      }
    }
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://i.pinimg.com/564x/81/4a/70/814a709d8ec2e1044d8bed7d792894ef.jpg"
            alt="Logo"
          />
        </div>
        <ul className="nav-list">
          <Search />
          <NavLink exact to="/" activeClassName="active">
            <li className="nav-item">
              <a className={`nav-link`} href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <span>Trang chu</span>
              </a>
            </li>
          </NavLink>
          <NavLink to="/san-pham" activeClassName="active">
            <li className="nav-item">
              <a className={`nav-link`} href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
                <span>San pham</span>
              </a>
            </li>
          </NavLink>
          <NavLink to="/tin-tuc" activeClassName="active">
            <li className="nav-item">
              <a className={`nav-link`} href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                  />
                </svg>

                <span>Tin tuc</span>
              </a>
            </li>
          </NavLink>
          <NavLink to="/co-so-san-xuat" activeClassName="active">
            <li className="nav-item">
              <a className={`nav-link`} href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                  />
                </svg>
                <span>Co so san xuat</span>
              </a>
            </li>
          </NavLink>
          <NavLink to="/hinh-anh-su-kien" activeClassName="active">
            <li className="nav-item">
              <a className={`nav-link`} href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <span>Hinh anh - Su kien</span>
              </a>
            </li>
          </NavLink>
        </ul>
        <div className="btn-wrapper">
          <button className="btn btn-login">
            <span class="material-symbols-outlined">person</span>
            <a href="/dang-nhap">
              <span>Dang nhap</span>
            </a>
          </button>
          <div className="menu-icon">
            <span class="material-symbols-outlined">menu</span>
          </div>
        </div>
      </nav>
      <nav className="navbar-bottom">
        <ul className="nav-list-bottom">
          <NavLink to="/" activeClassName="active">
            <li className="nav-item">
              <a className="nav-link" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </a>
            </li>
          </NavLink>
          <NavLink to="/san-pham" activeClassName="active">
            <li className="nav-item">
              <a className="nav-link" href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
              </a>
            </li>
          </NavLink>
          <NavLink to="/tin-tuc" activeClassName="active">
            <li className="nav-item">
              <a className="nav-link" href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                  />
                </svg>
              </a>
            </li>
          </NavLink>
          <NavLink to="/co-so-san-xuat" activeClassName="active">
            <li className="nav-item">
              <a className="nav-link" href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                  />
                </svg>
              </a>
            </li>
          </NavLink>
          <NavLink to="/hinh-anh-su-kien" activeClassName="active">
            <li className="nav-item">
              <a className="nav-link" href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </a>
            </li>
          </NavLink>
          <NavLink to="/dang-nhap" activeClassName="active">
            <li className="nav-item">
              <a className="nav-link" href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </a>
            </li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
