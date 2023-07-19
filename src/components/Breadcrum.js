function Breadcrum({ name }) {
  return (
    <div className="breadcrum">
      <span class="material-symbols-outlined">house</span>
      <span class="material-symbols-outlined">chevron_right</span>
      <span className="breadcrum-name">{name}</span>
    </div>
  );
}

export default Breadcrum;
