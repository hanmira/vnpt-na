function NewItem() {
  return (
    <div className="news-item">
      <div className="news-img">
        <img
          src="https://i.pinimg.com/564x/8f/14/21/8f1421ef18b2d977f07d28508ff714d7.jpg"
          alt="news image"
        />
        <div className="front"></div>
      </div>
      <div className="news-info-wrapper">
        <div className="news-info">
          <div className="news-time">
            <span class="material-symbols-outlined">schedule</span>12/05/2023
          </div>
          <div className="news-tag">
            <span class="material-symbols-outlined">sell</span>Tin tuc
          </div>
          <div className="news-view">
            <span class="material-symbols-outlined">visibility</span>45
          </div>
        </div>
        <h1 className="news-title">Lorem ipsum dolor sit amet</h1>
        <div className="news-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </div>
      </div>
    </div>
  );
}

export default NewItem;
