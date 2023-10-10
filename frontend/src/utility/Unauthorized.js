const Unauthorized = (statusCode) => {
  if (statusCode === 401) {
    // clear previous
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = "/login";

    // remember the last location
    const lastLocation = window.location;
    sessionStorage.setItem("last-location", lastLocation);
  }
};

export default Unauthorized;
