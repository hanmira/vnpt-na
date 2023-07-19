import { useEffect } from "react";

function Tabs() {
  useEffect(() => {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const tabs = $$(".tab-item");
    const panes = $$(".tab-pane");

    const tabActive = $(".tab-item.active");
    const line = $(".tabs .line");

    line.style.left = tabActive.offsetLeft + 15 + "px";
    line.style.width = tabActive.offsetWidth - 30 + "px";
    tabs.forEach((tab, index) => {
      const pane = panes[index];

      tab.onclick = function () {
        $(".tab-item.active").classList.remove("active");
        $(".tab-pane.active").classList.remove("active");

        line.style.left = this.offsetLeft + 15 + "px";
        line.style.width = this.offsetWidth - 30 + "px";

        this.classList.add("active");
        pane.classList.add("active");
      };
    });
  }, []);
  return (
    <div className="tab-section">
      {/* <!-- Tab items --> */}
      <div class="tabs">
        <div class="tab-item active">
          <i class="tab-icon fas fa-code"></i>
          gioi thieu
        </div>
        <div class="tab-item">
          <i class="tab-icon fas fa-cog"></i>
          thuong hieu noi bat
        </div>
        <div class="tab-item">
          <i class="tab-icon fas fa-plus-circle"></i>
          co so san xuat - kinh doanh
        </div>
        <div class="tab-item">
          <i class="tab-icon fas fa-pen-nib"></i>
          nong san lien quan
        </div>
        <div class="line"></div>
      </div>

      {/* <!-- Tab content --> */}
      <div class="tab-content">
        <div class="tab-pane active">
          <h2>React</h2>
          <p>
            React makes it painless to create interactive UIs. Design simple
            views for each state in your application, and React will efficiently
            update and render just the right components when your data changes.
          </p>
        </div>
        <div class="tab-pane">
          <h2>Angular</h2>
          <p>
            Angular is an application design framework and development platform
            for creating efficient and sophisticated single-page apps.
          </p>
        </div>
        <div class="tab-pane">
          <h2>Ember</h2>
          <p>
            Ember.js is a productive, battle-tested JavaScript framework for
            building modern web applications. It includes everything you need to
            build rich UIs that work on any device.
          </p>
        </div>
        <div class="tab-pane">
          <h2>Vue.js</h2>
          <p>
            Vue (pronounced /vjuː/, like view) is a progressive framework for
            building user interfaces. Unlike other monolithic frameworks, Vue is
            designed from the ground up to be incrementally adoptable.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
