import { useEffect } from "react";

function Dropdown({ list, name }) {
  useEffect(() => {
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach((dropdown) => {
      dropdown.querySelector(".dropdown-name").addEventListener("click", () => {
        dropdown.querySelector(".dropdown-list").classList.remove("close");
        dropdown.querySelector(".material-symbols-outlined").textContent =
          "arrow_drop_down";
      });
    });
  });
  return (
    <div className="dropdown">
      {name && (
        <div className="dropdown-name">
          {name}
          <span class="material-symbols-outlined">arrow_right</span>
        </div>
      )}
      {!name && (
        <div className="dropdown-name">
          Lorem ipsum
          <span class="material-symbols-outlined">arrow_right</span>
        </div>
      )}
      <div className="dropdown-list close">
        {list !== null &&
          list.map((item, index) => (
            <div key={index} className="radio-group">
              <input type="checkbox" value="" />
              <label>{item}</label>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Dropdown;
