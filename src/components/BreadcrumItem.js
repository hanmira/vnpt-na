function BreadcrumItem({ name }) {
  return (
    <div className="breadcrum-item">
      <span class="material-symbols-outlined">chevron_right</span>
      <span className="breadcrum-name">{name}</span>
    </div>
  );
}

export default BreadcrumItem;
