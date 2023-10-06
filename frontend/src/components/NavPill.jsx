const NavPill = () => {
  return (
    <ul className="nav nav-pills p-3 justify-content-center mb-3" id="pills-tab" role="tablist">
      <li className="nav-item" role="presentation">
        <button
          className="nav-link active"
          id="pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-new"
          type="button"
          role="tab"
          aria-controls="pills-home"
          aria-selected="true">
          New
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          id="pills-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-trending"
          type="button"
          role="tab"
          aria-controls="pills-profile"
          aria-selected="false">
          Trending
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          id="pills-contact-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-popular"
          type="button"
          role="tab"
          aria-controls="pills-contact"
          aria-selected="false">
          Popular
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          id="pills-disabled-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-top"
          type="button"
          role="tab"
          aria-controls="pills-disabled"
          aria-selected="false">
          Top
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          id="pills-disabled-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-special"
          type="button"
          role="tab"
          aria-controls="pills-disabled"
          aria-selected="false">
          Special
        </button>
      </li>
    </ul>
  );
};

export default NavPill;
