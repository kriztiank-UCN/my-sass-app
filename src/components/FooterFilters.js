import "./FooterFilters.scss";

// Recieve the isFirst prop from App.js
function FooterFilters({isFirst}) {
  return (
    <>
      <div className="filters">
        <div>
          {/* Dynamic Classes */}
          <p className={`${"main-text"} ${isFirst ? 'first' : ''}`}>Footer filters</p>
        </div>
      </div>
    </>
  );
}

export default FooterFilters;
