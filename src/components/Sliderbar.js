import { useEffect } from "react";
import Nouislider from "nouislider-react";
import * as noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";
// import "nouislider/distribute/nouislider.css";

function Slidebar() {
  useEffect(() => {
    var monthSlider = document.getElementById("month-slider");
    var startMonthLabel = document.getElementById("start-month");
    var endMonthLabel = document.getElementById("end-month");
    function destroyExistingSlider() {
      if (monthSlider && monthSlider.noUiSlider) {
        monthSlider.noUiSlider.destroy();
      }
    }
    destroyExistingSlider();

    var months = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
    ];

    var totalMonths = 12;
    var range = {
      min: 0,
      max: totalMonths - 1,
    };

    noUiSlider.create(monthSlider, {
      start: [0, totalMonths - 1],
      step: 1,
      range: range,
      connect: true,
    });

    // Update labels when slider values change
    monthSlider.noUiSlider.on("update", function (values) {
      var startMonthIndex = parseInt(values[0]);
      var endMonthIndex = parseInt(values[1]);

      startMonthLabel.textContent = months[startMonthIndex];
      endMonthLabel.textContent = months[endMonthIndex];
    });
  });
  if (document.querySelector(".slide-name")) {
    document.querySelector(".slide-name").addEventListener("click", () => {
      document.querySelector(".slide-name").querySelector("span").textContent =
        "arrow_right";
      document.querySelector(".slide-name").nextSibling.classList.add("hidden");
    });
  }

  return (
    <div className="slidebar">
      <div className="slide-name">
        Month slider
        <span class="material-symbols-outlined">arrow_drop_down</span>
      </div>
      <div class="month-range-slider">
        <div id="month-slider"></div>
        <div class="month-range-labels">
          <span class="month-label">
            | <br /> 1
          </span>
          <span class="month-label">
            | <br />2
          </span>
          <span class="month-label">
            | <br />3
          </span>
          <span class="month-label">
            | <br />4
          </span>
          <span class="month-label">
            | <br />5
          </span>
          <span class="month-label">
            | <br />6
          </span>
          <span class="month-label">
            | <br />7
          </span>
          <span class="month-label">
            | <br />8
          </span>
          <span class="month-label">
            | <br />9
          </span>
          <span class="month-label">
            | <br />
            10
          </span>
          <span class="month-label">
            | <br />
            11
          </span>
          <span class="month-label">
            | <br />
            12
          </span>
        </div>
        <div class="month-range-labels">
          <span class="start-label">
            Tu thang &nbsp;<span id="start-month"></span>
          </span>{" "}
          &nbsp; - &nbsp;
          <span class="end-label">
            Den thang &nbsp;<span id="end-month"></span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Slidebar;
